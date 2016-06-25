import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [
    'showBigRings:show-rings-big',
    'showHugeRings:show-rings-huge',
    'showNew:show-rings-new',
    'showOnlight:onlight'
  ],
  showBigRings: false,
  showHugeRings: false,
  showNew: false,
  showOnlight: false,
});
