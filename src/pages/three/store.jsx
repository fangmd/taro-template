import { makeAutoObservable } from 'mobx'
import React from 'react'
import { useLocalObservable } from 'mobx-react-lite'

class ThreeStore {
  counter = 0

  constructor() {
    makeAutoObservable(this)
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

  clear() {
    this.counter = 0
  }
}

const PageContext = React.createContext(null)

const usePageStore = () => {
  const store = React.useContext(PageContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

function PageProvider({ children }) {
  const threeStore = useLocalObservable(() => new ThreeStore())

  return <PageContext.Provider value={threeStore}>{children}</PageContext.Provider>
}

export { usePageStore, PageProvider }
