import { View, Text } from '@tarojs/components'
import { usePageStore } from '../../store'
import './index.less'

/**
 * 按钮
 */
const Btn = (props) => {
  const store = usePageStore()
  return (
    <View>
      <Text>自定义组件 {store.counter}</Text>
    </View>
  )
}

export default Btn
