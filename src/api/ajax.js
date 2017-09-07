import Vue from 'vue';

/**
 * 
 * @param {String}   method      可选值'GET','POST'
 * @param {object}   resource    Vue-resource的资源
 * @param {object}   data        ajax需要发送的数据
 * @param {function} success     请求成功回调函数
 */
function ajax(method, resource, data, success) {
  let promise;
  if (method === 'GET') {
    promise = resource.get(data)
  } else if (method === 'POST') {
    promise = resource.save(data)
  }

  promise && promise.then(({ body }) => {
    success && success(body);
  }, ({ body }) => {
    Vue.$loading.hide();
    Vue.$snackbar.show('网络错误 / 服务器错误 _(:з」∠)_');
  });
}

export default ajax;
