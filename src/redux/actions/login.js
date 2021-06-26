import { loginType } from "../constant";
import { loginByPhoneOrEmail,register  } from '@services/login';

export const isHideModal = (hideModal) => ({ type: loginType.HIDELOGIN, hideModal });
export const isSelectPro = (selectPro) => ({ type: loginType.SELECT_PRO, selectPro });
export const isAutoLogin = (autoLogin) => ({ type: loginType.AUTO_LOGIN, autoLogin });
export const isShowToast = (showToast) => ({ type: loginType.SHOW_TOAST, showToast });
export const setContent = (content) => ({ type: loginType.SET_CONTENT, content });

export const loginRequest = (type,playload) => {
  return async (dispatch) => {
    let res;

    switch(type) {
      case 'email':
      case 'phone-login': 
        res = await loginByPhoneOrEmail('POST',playload,false,type);
        break;
      case 'phone-register':
        res = await register('POST',playload,false);
        break;
      default:
        console.log('type参数发送错误!');

    }

    // console.log(res);
    if(res && res.code === 200) {
      dispatch(isHideModal(true));
      alert('登录成功,后续功能有待完善!');
  
    } else if(res && res.msg) {
      alert(`输入的${res.msg}`)
  
    }

  };

}