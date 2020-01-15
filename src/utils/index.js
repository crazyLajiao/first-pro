function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatNum(num){
  let temp = num;
  if(num>1000){
    temp = num/1000;
  }
  if(temp>1000){
    let reg=/\d{1,3}(?=(\d{3})+$)/g; 
    temp = (temp+'').replace(reg,'$&,')
  }
  console.log(temp,'ttttttttttt')
  return temp+'k';
}

export default {
  formatNumber,
  formatTime,
  formatNum
}
