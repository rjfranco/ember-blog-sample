import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  paragraphs: computed('model.content', function() {
    return this.get('model.content').split(/\n/);
  })
});
