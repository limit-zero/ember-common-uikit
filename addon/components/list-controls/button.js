import Component from '@ember/component';
import layout from '../../templates/components/list-controls/button';

export default Component.extend({
  layout,

  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['type', 'disabled', 'data-toggle', 'aria-haspopup', 'aria-expanded'],

  type: 'button',
  disabled: false,
});
