import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КолвоСахараEnum from '../enums/i-i-s-bazanov-s-колво-сахара';

export default FlexberryEnum.extend({
  enum: КолвоСахараEnum,
  sourceType: 'IIS.BazanovS.КолвоСахара'
});
