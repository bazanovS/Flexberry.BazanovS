import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bazanov-s-продукты', 'Unit | Model | i-i-s-bazanov-s-продукты', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
