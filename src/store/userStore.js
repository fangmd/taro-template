import { makeObservable, observable, action } from 'mobx'

/**
 * 用户相关数据
 */
class UserData {
  userInfo = null

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      login: action,
      loginOut: action,
    })
  }

  login() {
    this.counter++
  }

  loginOut() {
    this.counter++
  }

  get isLogin() {
    return this.userInfo
  }
}

function createUserStore() {
  return new UserData()
}

export { createUserStore }
