import { Serializer as ЕдаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bazanov-s-еда';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕдаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
