<template>
  <q-tooltip
    max-width="15em"
    :hide-delay="hideDelay"
    :delay="delay"
    style="text-align: center;"
    transition-show="scale"
    transition-hide="fade"
    class="text-center shadow-4"
    @onHover="true"
  >
    {{ text }}
  </q-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      required: true,
      default: '',
      type: String
    },
    delay: {
      required: false,
      default: 2000,
      type: Number
    },
    hideDelay: {
      required: false,
      default: 650,
      type: Number
    },
  },
};
</script>
