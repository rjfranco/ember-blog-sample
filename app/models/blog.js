import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

const { attr } = DS;

export default DS.Model.extend({
  author: attr('string'),
  avatar: attr('string'),
  content: attr('string'),
  date: attr('date'),
  title: attr('string'),

  displayDate: computed('date', function() {
    return moment(this.date).fromNow();
  })
});
