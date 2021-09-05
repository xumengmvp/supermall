// 防抖函数
export function debounce(func, delay) {
  let timer = null;
  return () => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    },delay)
  }
}

//日期转换
export function getFormatDate(params) {
  return params.getFullYear() + '-' + (params.getMonth() + 1) + '-' + params.getDate()
}