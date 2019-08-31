// 使用 Mock
import Mock from 'mockjs'


export default Mock.mock('/api/todolist','get',{
    success: true,
    message: 'type',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': ['@string(6,10)']
})