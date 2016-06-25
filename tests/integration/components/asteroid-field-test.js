import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('asteroid-field', 'Integration | Component | asteroid field', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{asteroid-field}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#asteroid-field}}
      template block text
    {{/asteroid-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
