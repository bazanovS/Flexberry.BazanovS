import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  продукты: DS.belongsTo('i-i-s-bazanov-s-продукты', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-bazanov-s-заказ', { inverse: 'еда', async: false })
});

export let ValidationRules = {
  продукты: {
    descriptionKey: 'models.i-i-s-bazanov-s-еда.validations.продукты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-bazanov-s-еда.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдаE', 'i-i-s-bazanov-s-еда', {
    продукты: belongsTo('i-i-s-bazanov-s-продукты', 'Продукты', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
