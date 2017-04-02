import Ember from 'ember';

export default Ember.Component.extend({

  active: undefined,

  links: [
    {
      name: 'Dashboard',
      icon: 'fa-dashboard',
      route: 'dashboard',
    },
    {
      name: 'Network',
      icon: 'fa-cogs',
      route: 'network',
    },
    {
      name: 'Multi',
      icon: 'fa-cogs',
      submenu: [
        {
          name: 'test1',
          route: 'test1',
        },
        {
          name: 'test2',
          route: 'test2',
        },
      ],
    },
  ],

/*
  init (args...) {
    _super(args);
    this.set('active', this.get('links')[1]);
  },
*/

});
