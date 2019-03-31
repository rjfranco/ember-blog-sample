import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goToBlog(blog) {
      this.transitionToRoute('blog', blog);
    }
  }
});