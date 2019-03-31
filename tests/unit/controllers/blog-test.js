import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | blog', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it can display individual paragraphs from generated content', function(assert) {
    let controller = this.owner.lookup('controller:blog');
    controller.set('model', {
      content: `Voluptas qui nesciunt modi qui voluptatum. Et nostrum illo. Tempora qui at tempore dolorem. Deserunt sed nulla saepe. Natus eligendi ut voluptatibus voluptas totam ut recusandae quaerat rem. Reiciendis quis enim ipsum dignissimos ab beatae fuga corrupti quaerat.
Fugit laudantium maiores. Tenetur ipsa inventore repellendus perspiciatis. Inventore nulla ut sint non quia nesciunt et aperiam. Inventore vero aperiam et quis est odio culpa et.
Ut iure repellendus. Iure necessitatibus eos quia eum dolores. Qui molestiae molestiae incidunt quia qui pariatur eaque libero. Labore doloremque laborum nihil debitis quae at laboriosam corrupti optio. Consequatur consequatur exercitationem eum.`
    })
    assert.equal(controller.get('paragraphs.length'), 3);
  });
});
