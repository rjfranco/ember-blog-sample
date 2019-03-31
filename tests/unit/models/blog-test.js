import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | blog', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('gives a friendly display time', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('blog', {
      date: new Date('1995-12-17T03:24:00')
    });
    assert.ok(model.get('displayDate').indexOf('years ago') > -1);
  });
});
