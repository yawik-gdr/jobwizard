<template>
  <div>
    <q-select
      v-if="$yawik.isAuth()"
      v-model="org"
      :label="$t('label.organization')"
      :rules="[ruleRequired]"
      outlined
      use-input
      dense
      :placeholder="organization === null ? $t('select_or_create') : ''"
      input-debounce="0"
      :options="filterOptions"
      option-value="id"
      option-label="name"
      @new-value="createValue"
      @filter="filterFn"
    >
      <template v-if="organization" #append>
        <q-icon name="cancel" class="cursor-pointer" @click.stop="organization = null" />
      </template>
    </q-select>

    <q-input
      v-else
      v-model="organization"
      outlined
      dense
      name="organization"
      class="col-12"
      :label="$t('label.organization')"
      :rules="[ruleRequired]"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { GET_FORM, SET_FIELD, GET_TOKEN } from 'src/store/names';
import mixinValidations from 'src/lib/validations';
import { api } from 'boot/axios';

export default {
  name: 'CompanySelect',
  components: { },
  setup()
  {
    return {
      filterOptions: [],
      organizations: []
    };
  },
  mixins: [mixinValidations],
  computed:
  {
    ...mapGetters([GET_FORM, GET_TOKEN]),
    org:
    {
      get()
      {
        return this[GET_FORM].org || this.organization;
      },
      set(val)
      {
        this[SET_FIELD]({ org: val });
        this.organization = val.name;
      }
    },
    organization:
    {
      get()
      {
        return this[GET_FORM].organization;
      },
      set(val)
      {
        this[SET_FIELD]({ organization: val });
      }
    },
  },
  mounted()
  {
    if (this.$yawik.isAuth())
    {
      this.getOrganizations();
    }
  },
  methods:
  {
    ...mapMutations([SET_FIELD]),
    createValue(val, done)
    {
      // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
      // and it resets the input textbox to empty string
      // ----
      // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
      // only if is not already set
      // and it resets the input textbox to empty string
      // ----
      // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
      // (adds to model if not already in the model, removes from model if already has it)
      // and it resets the input textbox to empty string
      // ----
      // If "var" content is undefined/null, then it doesn't tampers with the model
      // and only resets the input textbox to empty string

      if (val.length > 0)
      {
        if (!this.organizations.map(v => v.name).includes(val))
        {
          this.organizations.push(val);
        }
        done(val, 'toggle');
      }
    },
    filterFn(val, update)
    {
      update(() =>
      {
        if (val === '')
        {
          this.filterOptions = this.organizations;
        }
        else
        {
          const needle = val.toLowerCase();
          this.filterOptions = this.organizations.filter(
            v => v.name.toLowerCase().indexOf(needle) > -1
          );
        }
      });
      console.log('FILTER', val, update);
    },
    getOrganizations()
    {
      this.loading = true;
      api.get('/api/organizations', {
        params: {
          'pagination[page]': 1,
          'pagination[pageSize]': 20,
          fields: ['id', 'name'],
          sort: 'name:desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + this[GET_TOKEN]
        }
      }
      ).then(response =>
      {
        this.filterOptions = response.data.data.map(({ attributes }) => attributes);
        this.organizations = this.filterOptions;
      }).finally(() =>
      {
        this.loading = false;
      });
    },
    createOrganizations(name)
    {
      this.loading = true;
      api.post('/api/organizations', { name: name },
        {
          accept: 'application/json',
          Authorization: 'Bearer ' + this[GET_TOKEN]
        }
      ).then(response =>
      {
        this.test = response.data.data.map(({ attributes }) => attributes);
      }).finally(() =>
      {
        this.loading = false;
      });
    },
  }
};
</script>