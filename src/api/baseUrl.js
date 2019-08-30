// 请求地址配置
const baseUrl = {
  apiBaseUrl: ''
}

switch (process.env.VUE_APP_URL) {
  case 'development':
    // 本地地址
    baseUrl.apiBaseUrl = 'localhost:8090';
    break;
  case 'uat':
    // uat环境
    baseUrl.apiBaseUrl = 'www.test.com';
    break;
  case 'production':
    // 生产环境url
    baseUrl.apiBaseUrl = 'www.baidu.com';
    break;
}
export default baseUrl;
