import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаказа: DS.attr('date'),
  типОплаты: DS.attr('i-i-s-bazanov-s-оплата'),
  еда: DS.hasMany('i-i-s-bazanov-s-еда', { inverse: 'заказ', async: false }),
  горячиеНапитки: DS.hasMany('i-i-s-bazanov-s-горячие-напитки', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  датаЗаказа: {
    descriptionKey: 'models.i-i-s-bazanov-s-заказ.validations.датаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-bazanov-s-заказ.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  еда: {
    descriptionKey: 'models.i-i-s-bazanov-s-заказ.validations.еда.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  горячиеНапитки: {
    descriptionKey: 'models.i-i-s-bazanov-s-заказ.validations.горячиеНапитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-bazanov-s-заказ', {
    датаЗаказа: attr('Дата заказа', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    еда: hasMany('i-i-s-bazanov-s-еда', 'Еда', {
      продукты: belongsTo('i-i-s-bazanov-s-продукты', 'Продукты', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    }),
    горячиеНапитки: hasMany('i-i-s-bazanov-s-горячие-напитки', 'Горячие напитки', {
      сахар: attr('Сахар', { index: 0 }),
      напитки: belongsTo('i-i-s-bazanov-s-напитки', 'Напитки', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-bazanov-s-заказ', {
    датаЗаказа: attr('Дата заказа', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 })
  });
};
