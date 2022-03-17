export function debounce(func,delay=3000){
  let timer = null 

  return function(...args) {
    if(timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this,args)
    }, delay);
  }
}
