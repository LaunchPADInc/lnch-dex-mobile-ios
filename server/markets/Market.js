import Promise from 'bluebird'

/**
 * Market
 * microservice container for Mob instance
 */
export default class Market {
  constructor(params) {
    this.tokenA = params.tokenA
    this.tokenB = params.tokenB
    this.bookA = []
    this.bookB = []
  }

  sellA(amount) {
    console.log('hit sell A')
    return new Promise((resolve, reject) => {
      return Promise.delay(0)
      .then(() => {
        return this.bookA.splice(this.insertA(amount) + 1, 0, amount)
      }).then(() => {
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  sellB(amount) {
    console.log('hit sell B')
    return new Promise((resolve, reject) => {
      return Promise.delay(0)
      .then(() => {
        return this.bookB.splice(this.insertB(amount) + 1, 0, amount)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  insertA(amount) {
    let i = 0
    for(i; i < this.bookA.length; i++) {
      if (amount > this.bookA[i]) {
        break
      }
    }
    return i
  }

  insertB(amount) {
    let i = 0
    for(i; i < this.bookB.length; i++) {
      if (amount > this.bookB[i]) {
        break
      }
    }
    return i
  }
}
