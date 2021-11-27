import { useQuasar } from 'quasar';
import { store } from '../store';

const yawik = {
  lang()
  {
    const $q = useQuasar();
    return $q.lang.isoName === 'en-GB' ? 'en' : $q.lang.isoName;
  },
  isAuth()
  {
    return store.getters.HAS_AUTH;
  }
};
export default ({ app }) =>
{
  app.config.globalProperties.$yawik = yawik;
};
export { yawik };