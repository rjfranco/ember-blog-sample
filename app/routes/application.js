import Route from '@ember/routing/route';
import faker from 'faker';

export default Route.extend({
  model() {
    this.setupBlogRecords();
  },

  generateBlogRecords() {
    for (let i=0; i<100; i++) {
      this.store.createRecord('blog', {
        author: faker.name.findName(),
        avatar: faker.image.avatar(),
        content: faker.lorem.paragraphs(),
        date: faker.date.past(),
        id: faker.random.uuid(),
        title: faker.random.words()
      });
    }
  },

  setupBlogRecords() {
    this.generateBlogRecords();
  }
});
