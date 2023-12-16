import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Bazanov S',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bazanov S',
          title: 'Bazanov S'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
