import Component from '@ember/component';
import layout from '../templates/components/confirm-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn', 'clickable'],
  attributeBindings: ['disabled', 'type'],

  disabled: false,
  type: 'button',

  icon: '',
  label: 'Action',
  confirmLabel: 'You Sure?',
  onConfirm: null,

  hasConfirmed: false,

  click() {
    if (this.get('hasConfirmed')) {
      this.get('onConfirm')();
    } else {
      this.set('hasConfirmed', true);
    }
  },

  focusOut() {
    this.set('hasConfirmed', false);
  },
});
