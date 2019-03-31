import Route from '@ember/routing/route';
import faker from 'faker';
import { openDB } from 'idb';

export default Route.extend({
  model() {
    return this.setupBlogRecords();
  },

  addEntriesToStore(entries) {
    for (let i=0; i < entries.length; i++) {
      this.store.createRecord('blog', entries[i]);
    }
  },

  generateBlogEntries(db) {
    let entries = [];
    const transaction = db.transaction('blogs', 'readwrite');

    for (let i=0; i<100; i++) {
      let newEntry = {
        author: faker.name.findName(),
        avatar: faker.image.avatar(),
        content: faker.lorem.paragraphs(),
        date: faker.date.past(),
        id: faker.random.uuid(),
        title: faker.random.words()
      }
      entries.push(newEntry);
      transaction.store.add(newEntry);
    }

    return entries;
  },

  setupBlogRecords() {
    return new Promise((resolve) => {
      this.setupDB().then((db) => {
        return db.getAllFromIndex('blogs', 'id').then((entries) => {
          if (!entries.length) {
            entries = this.generateBlogEntries(db);
          }

          this.addEntriesToStore(entries);
          resolve();
        });
      });
    });
  },

  setupDB() {
    return openDB('el-blog', 1, {
      upgrade(db) {
        const store = db.createObjectStore('blogs', { keyPath: 'id' });
        store.createIndex('id', 'id');
      }
    });
  }
});
