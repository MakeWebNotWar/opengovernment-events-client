Opengov.CommentsController = Ember.ArrayController.extend({
  itemController: 'comment',
  actions: {
    create: function(){
      var self, store, url, data;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'comments'].join('/');
      data = {authentication: this.getProperties('user_email', 'authentication_token')}

      Ember.$.post(url, data).then

    }
  }
});

Opengov.CommentController = Ember.ObjectController.extend({
  needs: ['user']
});