Page({
  data: {
    info: '',
    leftCount: 2,
    chooseStatus: false,
    list: [{
        name: '张三',
        status: false
      },
      {
        name: '李四',
        status: true
      },
      {
        name: '王五',
        status: false
      }
    ]
  },
  // 获取输入框的信息
  getInfo(e) {
    // 打印当前input框输入时的值
    // console.log(e.detail.value)
    this.setData({
      info: e.detail.value
    })
  },
  // 添加信息
  addInfo() {
    // 如果不存在数据不能添加
    if (!this.data.info) {
      return
    }
    console.log(this.info)
    // console.log(this.data.info)
    var newList = this.data.list
    newList.push({
      name: this.data.info,
      status: false
    })
    this.setData({
      list: newList,
      info: '',
      leftCount: this.data.leftCount + 1
    })
  },
  // 切换状态
  changeStatus(e) {
    console.log(e)
    // 获取这个数组的下标
    var item = this.data.list[e.currentTarget.dataset.index]
    console.log(item)
    // 给这个下标的元素取非
    item.status = !item.status
    var newLeftCount = this.data.leftCount + (item.status ? -1 : 1)
    this.setData({
      list: this.data.list,
      leftCount: newLeftCount
    })
  },
  // 删除信息
  delInfo(e) {
    var newList = this.data.list;
    // item指的是被删除的元素
    var item = newList.splice(e.currentTarget.dataset.index, 1)[0];
    console.log(item)
    var newLeftCount = this.data.leftCount - (item.status ? 0 : 1)

    this.setData({
      list: newList,
      leftCount: newLeftCount
    })
  },
  // 全选
  chooseAll() {
    // 给这个状态取反
    this.data.chooseStatus = !this.data.chooseStatus;
    var newList = this.data.list;
    var that = this;
    // 循环这个新数组 把取反的状态赋给新数组的状态
    newList.forEach(ele => {
      ele.status = that.data.chooseStatus
    });
    var newLeftCount = this.data.chooseStatus ? 0 : this.data.list.length
    this.setData({
      list: newList,
      leftCount: newLeftCount
    })
  },
  // 清楚已完成任务
  clearComplated() {
    var newList = [];
    this.data.list.forEach(ele => {
      if (!ele.status) {
        newList.push(ele)
      }
    })
    this.setData({
      list: newList
    })
  }
})