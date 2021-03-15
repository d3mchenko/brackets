module.exports = function check(str, bracketsConfig) {
  while (true) {
    let flag = false;
    bracketsConfig.forEach (element => {
      if (str.includes(element[0] + element[1])) {
        str = str.replace(element[0] + element[1], '')
        flag = true;
      }
    })
    if (!flag) {
      break;
    }
  }
  return (str == 0) ? true : false;
}