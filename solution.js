// Dont touch this line
const faker = require('faker')
const crypto = require('crypto')
const ValidityChecker = require('./ValidityChecker')
// Dont touch this line

class Blockchain extends ValidityChecker {
  constructor() {
    super()
    this.chain = []
  }

  findTransaction(index) {
    return this.chain[index]
  }

  addBlock(block) {
    let index = this.chain.length
    let prevHash = this.chain.length
      ? this.chain[this.chain.length - 1].hash
      : 0
    let newBlock
    if (this.checkValidTransaction(block)) {
      newBlock = new Block(block, index, prevHash)
      this.chain.push(newBlock)
    } else {
      throw new Error('Transaction is Invalid')
    }
    return newBlock
  }

  destroyChain() {
    this.chain = []
  }
}

class Block {
  /**
   * @param data { sender:String, recipient:String, amount:Integer }
   */
  constructor(data, index, prevHash) {
    this.data = data
    this.index = index
    this.prevHash = prevHash
    this.timeStamp = Math.floor(Date.now() / 1000)
    this.hash = this.getHash()
  }
  getHash() {
    let string =
      JSON.stringify(this.data) + this.prevHash + this.index + this.timeStamp
    let hash = crypto
      .createHmac('sha256', 'secret')
      .update(string)
      .digest('hex')
    return hash
  }
}

let blockchain = new Blockchain()

blockchain.addBlock({
  sender: `${faker.name.firstName()} ${faker.name.lastName()}`,
  recipient: `${faker.name.firstName()} ${faker.name.lastName()}`,
  amount: faker.finance.amount()
})
blockchain.addBlock({
  sender: `${faker.name.firstName()} ${faker.name.lastName()}`,
  recipient: `${faker.name.firstName()} ${faker.name.lastName()}`,
  amount: faker.finance.amount()
})
blockchain.addBlock({
  sender: `${faker.name.firstName()} ${faker.name.lastName()}`,
  recipient: `${faker.name.firstName()} ${faker.name.lastName()}`,
  amount: faker.finance.amount()
})

console.log('BLOCKCHAIN VALIDITY', blockchain.checkChainValid(blockchain.chain))
console.log(blockchain.chain[0])
blockchain.chain[0].data.sender = 'Tester'
console.log(blockchain.chain[0])
console.log('BLOCKCHAIN VALIDITY', blockchain.checkChainValid(blockchain.chain))

module.exports = {
  Blockchain,
  Block
}
