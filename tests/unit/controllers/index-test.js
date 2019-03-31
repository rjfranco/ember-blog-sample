import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('can sort it\'s models', function(assert) {
    let controller = this.owner.lookup('controller:index');

    let model = [
      {
        title: 'b',
        date: new Date('2000-01-02T00:00:00')
      },
      {
        title: 'c',
        date: new Date('2000-01-01T00:00:00')
      },
      {
        title: 'a',
        date: new Date('2000-01-03T00:00:00')
      }
    ];

    controller.set('model', model);

    let blogsOrder = controller.get('blogs').map((model) => { return model.title }).join('');

    assert.equal(blogsOrder, 'abc')
  });
});
