import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // 原型上有这个对象，但是里面的东西没加到body上面
  //  Vue.prototype.$toast = Toast
  // document.body.appendChild(Toast.$el)

  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.new的方式，根据组件构造器，创建一个组件对象
  const toast = new toastConstructor()
  // 3.将组件对象，手动挂载到对象上
  toast.$mount(document.createElement('div'))
  // 4.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj