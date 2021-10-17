import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { useStore } from '@/store/context'
import { observer } from 'mobx-react'

import './index.less'

const SecondPage = (props) => {
  const { commonStore } = useStore()
  console.log(commonStore)

  const toFist = () => {
    Taro.navigateBack()
  }

  return (
    <View className='SecondPage__root'>
      <Text>{commonStore.counter}</Text>
      <Button onClick={toFist}>返回</Button>
    </View>
  )
}

export default observer(SecondPage)
