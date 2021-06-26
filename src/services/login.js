
import request from './request';

/**
 * @param {method,url,data,params,withCredentials} config
 *        config中属性名要更请求参数的名字相同
 */ 

export const loginByPhoneOrEmail = (method,playload,isMd5,loginMethod) => {

  let url = '';
  switch(loginMethod) {
    case 'phone-login': 
      url = '/login/cellphone';
      break;
    case 'email': 
      url = '/login';
      break;
    default:
      alert('该函数仅处理手机登录和邮箱登录');
  }

  if (url) {
    
    const newPlayLoad = {
      [loginMethod === 'phone-login' ? 'phone' : 'email']: playload.username,
      [isMd5 ? 'md5_password' : 'password']: playload.password,
    };

    return request({ method,url,[method === 'POST' ? 'data' : 'params']: newPlayLoad });

  }

}

// 手机号注册
export const register = (method,playload) => {
  alert('暂未开发');
}