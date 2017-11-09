import _ from 'underscore';

// MixinOptions
// - collectionEvents
// - modelEvents

export default {
  // Handle `modelEvents`, and `collectionEvents` configuration
  _delegateEntityEvents(model, collection) {
    const modelEvents = _.result(this, 'modelEvents');

    if (modelEvents) {
      this.unbindEvents(model, modelEvents);
      this.bindEvents(model, modelEvents);
    }

    const collectionEvents = _.result(this, 'collectionEvents');

    if (collectionEvents) {
      this.unbindEvents(collection, collectionEvents);
      this.bindEvents(collection, collectionEvents);
    }
  },

  _undelegateEntityEvents(model, collection) {
    const modelEvents = _.result(this, 'modelEvents');
    this.unbindEvents(model, modelEvents);

    const collectionEvents = _.result(this, 'collectionEvents');
    this.unbindEvents(collection, collectionEvents);
  }
};
