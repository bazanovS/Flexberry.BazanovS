import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bazanov-s-напитки', 'Unit | Serializer | i-i-s-bazanov-s-напитки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bazanov-s-напитки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bazanov-s-колво-сахара',
    'transform:i-i-s-bazanov-s-оплата',

    'model:i-i-s-bazanov-s-горячие-напитки',
    'model:i-i-s-bazanov-s-еда',
    'model:i-i-s-bazanov-s-заказ',
    'model:i-i-s-bazanov-s-напитки',
    'model:i-i-s-bazanov-s-продукты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
