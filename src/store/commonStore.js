import { makeObservable, observable, action } from 'mobx'

// /**
//  * Common Store
//  */
// const commonData = {
//   counter: 0,
//   counterStore() {
//     this.counter++
//   },
//   increment() {
//     this.counter++
//   },
//   decrement() {
//     this.counter--
//   },
//   incrementAsync() {
//     setTimeout(() => {
//       this.counter++
//     }, 1000)
//   },
// }

class CommonData {
  counter = 0

  constructor() {
    makeObservable(this, {
      counter: observable,
      increment: action,
      decrement: action,
      incrementAsync: action,
    })
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

function createCommonStore() {
  return new CommonData()
}

export { createCommonStore }
