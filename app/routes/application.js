import Ember from 'ember';

export default Ember.Route.extend({
    title(tokens) {
      debugger;
      tokens.push('::MY ENGINE APP::')
      return tokens.join(' | ');
    },
});