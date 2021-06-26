
const devBaseURL = "http://123.207.32.32:9001/";
const proBaseURL = "http://123.207.32.32:9001/";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

// 有时请求网易云官方的API是会比较慢，因此建议设置长一点
export const TIMEOUT = 10000;