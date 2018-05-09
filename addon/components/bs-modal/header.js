import Component from '@ember/component';
import layout from '../../templates/components/bs-modal/header';

export default Component.extend({
  layout,
  classNames: ['modal-header'],
  title: null,
  showClose: true,

  titleComponent: 'bs-modal/title',
  closeComponent: 'bs-modal/close-icon'
});
