import Component from '@ember/component';
import layout from '../templates/components/bs-modal';

export default Component.extend({
  layout,
  to: 'bootstrap-modals',
  backdrop: true,
  fade: true,
  show: false,
  keyboard: true,
  focus: true,
  size: null,
  contentClass: null,
  dislogClass: null,
});
