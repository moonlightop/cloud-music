
// 产生 0 ~ len - 1 的随机数
export const getRandomIndex = (len,preNum) => {
  let newNum = Math.floor(Math.random() * len);
  while(newNum === preNum) {
    newNum = Math.floor(Math.random() * len);
  }
  return newNum;
}