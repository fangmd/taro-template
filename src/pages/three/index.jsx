import Taro from '@tarojs/taro'
import { observer, useLocalObservable } from 'mobx-react'
import { View, Button, Text } from '@tarojs/components'
import { useEffect, useState, useRef, createContext, useContext } from 'react'
import { useStore } from '@/store/context'
import { PageProvider, usePageStore } from './store'
import Btn from './components/btn'

import './index.less'

/**
 * 测试局部 mobx
 */
const ThreePage = observer((props) => {
  const instantRef = useRef()
  const { commonStore } = useStore()
  const threeStore = usePageStore()

  useEffect(() => {
    console.log('three page init')
    return () => {
      console.log('three page end')
    }
  }, [])

  const toFist = () => {
    Taro.navigateBack()
  }

  const toNextPage = () => {
    Taro.navigateTo({ url: '/pages/three/index' })
  }

  const changeThreeStore = () => {
    threeStore.increment()
  }

  return (
    <View className='ThreePage__root'>
      <Text>commonStore: {commonStore.counter}</Text>
      <Text>threeStore: {threeStore.counter}</Text>
      <Button onClick={changeThreeStore}>修改 ThreeStore</Button>

      <Button onClick={toFist}>返回</Button>
      <Button onClick={toNextPage}>to next page</Button>

      <Btn />
      <Text className='title'>CSS 样式测试</Text>
    </View>
  )
})

export default () => (
  <PageProvider>
    <ThreePage />
  </PageProvider>
)
