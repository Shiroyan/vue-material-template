/**
 * @method  输入框聚焦时进行滚动，防止输入法阻挡输入框
 * @param {object}  ele   dom对象,滚动条的容器
 * @param {Number}    h   滚动的高度 
 */
function adjustInput(ele, h) {
  setTimeout(() => {
    ele.scrollTop = h;
  }, 500);
}

function isWechat(str) {
  // let reg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
  let reg = /^[-_a-zA-Z0-9]{6,20}$/;
  // let reg = /^[a-zA-Z\d_]{5,}$/;
  return reg.test(str);
}

function isMobile(str) {
  let reg = /^1[34578]\d{9}$/;
  return reg.test(str);
}

/**
 * @method  回到顶部
 * @param {object}    ele         dom对象，滚动的容器
 * @param {Number}    durations   滚动持续时间
 * @param {function}  callback    到达顶部的回调函数 
 */
function backTop(ele, durations, callback = undefined) {
  const scrollTop = ele.scrollTop;
  for (let i = 60; i >= 0; i--) {
    setTimeout((i => {
      return () => {
        ele.scrollTop = scrollTop * i / 60;
        if (i === 0 && typeof callback === 'function') {
          callback();
        }
      };
    })(i), durations * (1 - i / 60))
  }
}

/**
 * @method 获取url参数
 * @param {String} paramKey url参数的key值
 * 
 * 示例 http://www.baidu.com?code=abcde
 * code     --paramKey
 * abcde    --param
 */
function getParams(paramKey) {
  let arr = window.location.search.replace('?', '').split('&');
  let set = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let key = item.split('=')[0];
    let val = item.split('=')[1];
    set[key] = val;
  }
  return set[paramKey];
}

export {
  adjustInput,
  isWechat,
  isMobile,
  backTop,
  getParams,
};
