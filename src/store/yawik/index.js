import userSettings from 'src/settings/user';

import {
  GET_FORM,
  GET_SETTINGS,
  GET_STEP,
  GET_LANG,
  GET_LOGO,
  GET_META,
  GET_HEADER,
  GET_HTML,
  GET_TOKEN,
  GET_LOCATION,
  HAS_AUTH,
  CLEAR_FORM,
  SET_SETTINGS_FIELD,
  SET_STEP,
  SET_FIELD,
  SET_LANG,
  SET_LOGO,
  SET_JOB,
  SET_META,
  SET_HEADER,
  SET_HTML,
  SET_TOKEN,
  SET_LOCATION
} from '../names';

const emptyForm = {
  id: null,
  step: 'stepOne',
  jobTitle: '',
  organization: '',
  org: null,
  channels: [],
  location: {
    streetAdress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: '',
    lat: 0,
    lng: 0,

  },
  meta: {
    publishImmediately: true,
    publishStart: '',
    publishDays: 30,
    acceptTerms: false,
    channels: [],
    workKind: ['contract'],
    workDuration: ['fulltime'],
    partTime: false,
    partTimePercentage: 50,
    shiftWorkAmount: 2,
    remoteWork: false,
    remoteWorkPercentage: 50,
    salary: {
      label: '40.000€ - 60.000€',
      value: '40|60'
    },
    salaryVisibility: true,
    formattedAddress: '',
    color1: '#5498D7'
  },
  applyURL: '',
  applyEmail: '',
  applyPost: false,
  reference: '',
  introLabel: '',
  intro: '',
  taskLabel: '',
  tasks: '',
  profileLabel: '',
  profile: '',
  offerLabel: '',
  offer: '',
  contactInfoLabel: '',
  contactInfo: '',
  acceptTerms: false,
};

export default
{
  state()
  {
    return {
      form: emptyForm,
      settings: userSettings,
      logo: '', // Base-64 encoded
      header: '', // Base-64 encoded
      html: '',
      token: null,
      lang: null
    };
  },
  getters:
    {
      [GET_FORM](state)
      {
        return state.form;
      },
      [GET_SETTINGS](state)
      {
        return state.settings;
      },
      [GET_STEP](state)
      {
        return state.form.step;
      },
      [GET_LANG](state)
      {
        return state.lang;
      },
      [GET_META](state)
      {
        return state.form.meta;
      },
      [GET_LOCATION](state)
      {
        return state.form.location;
      },
      [GET_LOGO](state)
      {
        return state.form.logo;
      },
      [GET_HEADER](state)
      {
        return state.form.header;
      },
      [GET_HTML](state)
      {
        return state.html;
      },
      [GET_TOKEN](state)
      {
        return state.token;
      },
      [HAS_AUTH](state)
      {
        return state.token && state.token !== null;
      },
    },
  mutations:
    {
      [CLEAR_FORM](state)
      {
        for (const key in emptyForm) state.form[key] = emptyForm[key];
        state.logo = '';
        state.header = '';
        if (state.form.id)
        {
          delete state.form.id;
        }
      },
      [SET_STEP](state, value)
      {
        state.form.step = value;
      },
      [SET_FIELD](state, obj)
      {
        state.form[Object.keys(obj)[0]] = Object.values(obj)[0];
      },
      [SET_LANG](state, value)
      {
        state.lang = value;
      },
      [SET_META](state, obj)
      {
        state.form.meta[Object.keys(obj)[0]] = Object.values(obj)[0];
      },
      [SET_LOCATION](state, obj)
      {
        //state.form.location[Object.keys(obj)[0]] = Object.values(obj)[0];
        state.form.location = obj;
      },
      [SET_LOGO](state, value)
      {
        state.form.logo = value;
      },
      [SET_HEADER](state, value)
      {
        state.form.header = value;
      },
      [SET_HTML](state, value)
      {
        state.html = value;
      },
      [SET_TOKEN](state, token)
      {
        state.token = token;
      },
      [SET_JOB](state, data)
      {
        state.form = emptyForm;
        state.form = { ...Object.values(data)[0] };
        console.log(data);
        state.form.step = 'stepOne';
        if (!state.form.remoteWork)
        {
          state.form.remoteWork = false;
        }
        if (!state.form.salary)
        {
          state.form.salary = {
            label: '40.000€ - 60.000€',
            value: '40|60'
          };
        }
        if (!state.form.meta.channels)
        {
          state.form.meta.channels = [];
        }
      },
      [SET_SETTINGS_FIELD](state, obj)
      {
        state.settings[Object.keys(obj)[0]] = Object.values(obj)[0];
      }
    }
};
