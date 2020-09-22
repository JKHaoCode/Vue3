import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.hapyun.com';

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const configParams = config;
    configParams.data = JSON.stringify(config.data);

    configParams.headers = {
      'Content-Type': 'application/json',
    };
    const sessionLocal = localStorage.getItem('token');
    if (sessionLocal) {
      configParams.headers = {
        ...config.headers,
        Authorization: `Bearer ${sessionLocal}`,
      };
    }

    return configParams;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器即异常处理
axios.interceptors.response.use((response) => response, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求');
        break;
      case 401:
        // message.error('未授权，请重新登录');
        // this.$router.push('/login')
        message.error('未授权，请重新登录');
        break;
      case 403:
        message.error('拒绝访问');
        break;
      case 404:
        message.error('请求错误,未找到该资源');
        break;
      case 405:
        message.error('请求方法未允许');
        break;
      case 408:
        message.error('请求超时');
        break;
      case 500:
        message.error('服务器端出错');
        break;
      case 501:
        message.error('网络未实现');
        break;
      case 502:
        message.error('网络错误');
        break;
      case 503:
        message.error('服务不可用');
        break;
      case 504:
        message.error('网络超时');
        break;
      case 505:
        message.error('http版本不支持该请求');
        break;
      default:
        message.error(`连接错误${err.response.status}`);
    }
  } else {
    message.error('连接到服务器失败');
  }

  // console.log(err.response)
  return err.response;
});

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function fetch(url: string, params = {}) {
  return axios.get(url, {
    params,
  }).then((response) => response.data)
    .catch((err) => {
      console.log(err);
      message.error(err);
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: string, data = {}) {
  return axios.post(url, data)
    .then((response) => response.data, (err) => {
      message.error(err);
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url: string, data = {}) {
  return axios.patch(url, data)
    .then((response) => response.data, (err) => {
      message.error(err);
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data = {}) {
  return axios.put(url, data)
    .then((response) => (response.data), (err) => {
      message.error(err);
    });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function remove(url: string, data = {}) {
  return axios.delete(url, data)
    .then((res) => (res.data as { id: number }),
      (err) => {
        message.error(err);
      });
}

/**
 * 下面是获取数据的接口
 */
/**
 * 测试接口
 * 名称：exam
 * 参数：paramObj/null
 * 方式：fetch/post/patch/put
 */
// export const server = {
//   exam: function(paramObj) {
//     return post('/api.php?ac=v2_djList', paramObj);
//   }
// }
