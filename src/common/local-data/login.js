
export const LoginFooter = [
  {
    href: 'http://st.music.163.com/official-terms/service',
    title: '《服务条款》',
  },
  {
    href: 'http://st.music.163.com/official-terms/privacy',
    title: '《隐私政策》',
  },
  {
    href: 'https://st.music.163.com/official-terms/children',
    title: '《儿童隐私政策》',
  },
];

export const LoginContentRight = [
  {
    title: '微信登录',
    href: 'https://open.weixin.qq.com/connect/qrconnect?appid=wxe280063f5fb2528a&response_type=code&redirect_uri=https://music.163.com/back/weichat&forcelogin=true&scope=snsapi_login&state=LcBUBgcSjM&lang=zh_CN#wechat_redirect',
  },
  {
    title: 'qq登录',
    href: 'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100495085&response_type=code&redirect_uri=https://music.163.com/back/qq&forcelogin=true&state=rrFqTTNnzn',
  },
  {
    title: '微博登录',
    href: 'https://api.weibo.com/oauth2/authorize?client_id=301575942&response_type=code&redirect_uri=http://music.163.com/back/weibo&forcelogin=true&scope=friendships_groups_read,statuses_to_me_read,follow_app_official_microblog&state=EKYyKxZykI###',
  },
  {
    title: '网易邮箱账号登录',
    isLoginWay: true,
  }
];