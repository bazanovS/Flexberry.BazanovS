import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBazanovSЗаказLForm from './forms/i-i-s-bazanov-s-заказ-l';
import IISBazanovSНапиткиLForm from './forms/i-i-s-bazanov-s-напитки-l';
import IISBazanovSПродуктыLForm from './forms/i-i-s-bazanov-s-продукты-l';
import IISBazanovSЗаказEForm from './forms/i-i-s-bazanov-s-заказ-e';
import IISBazanovSНапиткиEForm from './forms/i-i-s-bazanov-s-напитки-e';
import IISBazanovSПродуктыEForm from './forms/i-i-s-bazanov-s-продукты-e';
import IISBazanovSГорячиеНапиткиModel from './models/i-i-s-bazanov-s-горячие-напитки';
import IISBazanovSЕдаModel from './models/i-i-s-bazanov-s-еда';
import IISBazanovSЗаказModel from './models/i-i-s-bazanov-s-заказ';
import IISBazanovSНапиткиModel from './models/i-i-s-bazanov-s-напитки';
import IISBazanovSПродуктыModel from './models/i-i-s-bazanov-s-продукты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bazanov-s-горячие-напитки': IISBazanovSГорячиеНапиткиModel,
    'i-i-s-bazanov-s-еда': IISBazanovSЕдаModel,
    'i-i-s-bazanov-s-заказ': IISBazanovSЗаказModel,
    'i-i-s-bazanov-s-напитки': IISBazanovSНапиткиModel,
    'i-i-s-bazanov-s-продукты': IISBazanovSПродуктыModel
  },

  'application-name': 'Bazanov S',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Bazanov S',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bazanov S',
          title: 'Bazanov S'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        клиентам: {
          caption: 'Клиентам',
          title: 'Клиентам',
          'i-i-s-bazanov-s-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        сотрудникам: {
          caption: 'Сотрудникам',
          title: 'Сотрудникам',
          'i-i-s-bazanov-s-напитки-l': {
            caption: 'Напитки',
            title: ''
          },
          'i-i-s-bazanov-s-продукты-l': {
            caption: 'Продукты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bazanov-s-заказ-l': IISBazanovSЗаказLForm,
    'i-i-s-bazanov-s-напитки-l': IISBazanovSНапиткиLForm,
    'i-i-s-bazanov-s-продукты-l': IISBazanovSПродуктыLForm,
    'i-i-s-bazanov-s-заказ-e': IISBazanovSЗаказEForm,
    'i-i-s-bazanov-s-напитки-e': IISBazanovSНапиткиEForm,
    'i-i-s-bazanov-s-продукты-e': IISBazanovSПродуктыEForm
  },

});

export default translations;
