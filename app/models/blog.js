import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  author: attr('string'),
  avatar: attr('string'),
  content: attr('string'),
  date: attr('date'),
  title: attr('string')
});
