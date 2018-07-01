/* eslint-disable */
export default {
  modifyDateProto () {
    Date.prototype.Format = function (fmt) {
      var output = {
        'y+': this.getFullYear(),
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),    //  季度
        'S+': this.getMilliseconds()
      }
      for (var i in output) {
        if (new RegExp("(" + i + ")").test(fmt)) {
          if (i == 'y+') {
            fmt = fmt.replace(RegExp.$1, (""+output[i]).substr(4 - RegExp.$1.length))
          } else if (i == 'S+') {
            var lens = RegExp.$1.length
            lens = (lens == 1) ? 3: lens
            fmt = fmt.replace(RegExp.$1, ("00"+output[i]).substr((""+output[i]).length - 1, lens))
          } else {
            fmt = fmt.replace(RegExp.$1,
              (RegExp.$1.length == 1) ? (output[i]):(("00"+output[i]).substr((""+output[i]).length)) )
          }
        }
      }
      return fmt
    }
  }
}
