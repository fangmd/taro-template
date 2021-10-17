import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { useStore } from '@/store/context'
import { observer } from 'mobx-react'

import './index.less'

const Index = () => {
  const { commonStore } = useStore()
  console.log(commonStore)

  const increment = () => {
    commonStore.increment()
  }

  const decrement = () => {
    commonStore.decrement()
  }

  const incrementAsync = () => {
    commonStore.incrementAsync()
  }

  const toSecond = () => {
    Taro.navigateTo({ url: '/pages/second/index' })
  }

  const toThree = () => {
    Taro.navigateTo({ url: '/pages/three/index' })
  }

  return (
    <View className='IndexPage__root'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{commonStore.counter}</Text>
      <Button onClick={toSecond}>跳转到 Second</Button>
      <Button onClick={toThree}>跳转到 Three</Button>

      <Text className='title'>CSS 样式测试</Text>
    </View>
  )
}

export default observer(Index)
