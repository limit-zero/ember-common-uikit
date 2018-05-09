import Component from '@ember/component';
import layout from '../../templates/components/bs-modal/dialog';

export default Component.extend({
  layout,
  classNames: ['modal-dialog'],
  classNameBindings: ['_sizeClass'],
  attributeBindings: ['role'],

  role: 'document',

  size: null,

  _sizeClass: computed('size', function() {
    switch (this.get('size')) {
      case 'small':
        return 'modal-sm';
      case 'large':
        return 'modal-lg';
      default:
        return null;
    }
  }),
});
