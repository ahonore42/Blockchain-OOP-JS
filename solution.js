// Dont modify
const faker = require('faker')
const crypto = require('crypto')
const ValidityChecker = require('./ValidityChecker')
// Dont modify

class Blockchain {
  constructor() {
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
// Dont modify
module.exports = {
  Blockchain,
  Block
}
// Dont modify
