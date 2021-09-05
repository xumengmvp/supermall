import Toast from './Toast'

const obj = {}

obj.install =  function (Vue) {
  //创建组件构造器
  const toastconstructor = Vue.extend(Toast)

  //new的方式，根据组件构造器，创建组件对象
  const toast = new toastconstructor()

  //将组件对象手动挂载到某一个div上面
  toast.$mount(document.createElement('div'))
  
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj