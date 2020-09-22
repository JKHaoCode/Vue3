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
        message.error('未授权，请重新登录');
        // this.$router.push('/login')
        break;
      case 403:
        console.log('拒绝访问');
        break;
      case 404:
        console.log('请求错误,未找到该资源');
        break;
      case 405:
        console.log('请求方法未允许');
        break;
      case 408:
        console.log('请求超时');
        break;
      case 500:
        console.log('服务器端出错');
        break;
      case 501:
        console.log('网络未实现');
        break;
      case 502:
        console.log('网络错误');
        break;
      case 503:
        console.log('服务不可用');
        break;
      case 504:
        console.log('网络超时');
        break;
      case 505:
        console.log('http版本不支持该请求');
        break;
      default:
        console.log(`连接错误${err.response.status}`);
    }
  } else {
    console.log('连接到服务器失败');
  }
  return Promise.resolve(err.response);
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
  })
    .then((response) => response.data)
    .catch((err) => {
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
