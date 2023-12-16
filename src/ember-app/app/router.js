import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-bazanov-s-заказ-l');
  this.route('i-i-s-bazanov-s-заказ-e',
  { path: 'i-i-s-bazanov-s-заказ-e/:id' });
  this.route('i-i-s-bazanov-s-заказ-e.new',
  { path: 'i-i-s-bazanov-s-заказ-e/new' });
  this.route('i-i-s-bazanov-s-напитки-l');
  this.route('i-i-s-bazanov-s-напитки-e',
  { path: 'i-i-s-bazanov-s-напитки-e/:id' });
  this.route('i-i-s-bazanov-s-напитки-e.new',
  { path: 'i-i-s-bazanov-s-напитки-e/new' });
  this.route('i-i-s-bazanov-s-продукты-l');
  this.route('i-i-s-bazanov-s-продукты-e',
  { path: 'i-i-s-bazanov-s-продукты-e/:id' });
  this.route('i-i-s-bazanov-s-продукты-e.new',
  { path: 'i-i-s-bazanov-s-продукты-e/new' });
});

export default Router;
