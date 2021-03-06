/**
  Browser Controller.

  This is a simple ObjectController that handles searching for specific repos.
*/
define([
  'ember',
  'app/models/repository'
], function(Ember, Repository) {

  var BrowserController = Ember.ObjectController.extend({
    searchTerm: '',

    actions: {
      searchRepos: function(name) {
        this.set('searchTerm', name);
        this.transitionToRoute('repositories', Repository.findAll(name));
      }
    }
  });

  return BrowserController;
});