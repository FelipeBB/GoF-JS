const assert = require('assert')
const { Penne, SauceDecorator, CheeseDecorator } = require('../../../structural/decorator/decorator')



describe('decorator tests', () => {

  it('sanity test', () => {
    const penne = new Penne()
    const penneWithSauce = new SauceDecorator(penne)
    const penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce)

    assert.strictEqual(penne.getPrice(),8)
    assert.strictEqual(penneWithSauce.getPrice(),13)
    assert.strictEqual(penneWithSauceAndCheese.getPrice(),16)
  })

})
