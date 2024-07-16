import EmberRouter from '@ember/routing/router';
import config from 'frontend-local-harvester/config/environment';
import { externalRoute, fallbackRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sparql');
  this.route('view', function () {});
  externalRoute(this); // <-- Add this line before fallbackRoute
  fallbackRoute(this);

  this.route('legaal', function () {
    this.route('disclaimer');
    this.route('cookieverklaring');
  });
});
