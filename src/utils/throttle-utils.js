
export const throttle = (callback,wait) => {
  let timer = null;
  return (e) => {
    if(timer) return;
    timer = setTimeout(() => {
      callback(e);
      timer = null;

    },wait)

  }

}

export const debounce = (callback,wait) => {
  let timer = null;
  return (e) => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(callback,wait);
  }
}