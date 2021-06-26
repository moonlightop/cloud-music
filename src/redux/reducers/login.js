import Immutable from 'immutable';
import { loginType } from "../constant";

// 通过初始化initState使得redux中的state变为Immutable
// 控制登录组件是否隐藏
const initState = Immutable.Map({
  hideModal: true,
  selectPro: false,
  autoLogin: false,
  showToast: false,
  content: {
    type: 'scan-qr',
    title: '二维码登录'
  }
});

export default function login(preState=initState,action) {
  // console.log(preState);

  switch(action.type) {
    case loginType.HIDELOGIN:
      return preState.set('hideModal',action.hideModal);
    case loginType.SELECT_PRO:
      return preState.set('selectPro',action.selectPro);
    case loginType.AUTO_LOGIN:
      return preState.set('autoLogin',action.autoLogin);
    case loginType.SHOW_TOAST: 
      return preState.set('showToast',action.showToast);
    case loginType.SET_CONTENT:
      return preState.set('content',action.content);
    default: 
      return preState;
  }

}