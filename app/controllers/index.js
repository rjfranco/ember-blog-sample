import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  blogs: sort('model', (a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  }),

  actions: {
    goToBlog(blog) {
      this.transitionToRoute('blog', blog);
    }
  }
});
