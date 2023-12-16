import { Serializer as НапиткиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bazanov-s-напитки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НапиткиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
