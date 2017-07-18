import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'allthemats/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});
