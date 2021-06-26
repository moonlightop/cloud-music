import computerImg from '@assets/img/download/listen-in-computer.png';
import phoneImg from '@assets/img/download/listen-in-phone.png';
import content1 from '@assets/img/download/download-content1.jpg';
import content2 from '@assets/img/download/download-content2.jpg';
import content3 from '@assets/img/download/download-content3.jpg';
import content4 from '@assets/img/download/download-content4.jpg';
import content5 from '@assets/img/download/download-content5.jpg';

export const LeftContent = {
  title: '在电脑上听',
  src: computerImg,
  imgClassName: 'computer',
  mac: 'mac',
  windows: 'windows',
  downloadHref: 'https://music.163.com/stat/?web=pc&from=download&t=1617672168700&redirect=https%3A%2F%2Fmusic.163.com%2Fapi%2Fpc%2Fpackage%2Fdownload%2Flatest',
  
}
export const RightContent = {
  title: '在手机上听',
  src: phoneImg,
  imgClassName: 'phone',
  phoneMac: 'phone-mac',
  android: 'android',
  
}

export const TitleAndImage = [
  {
    h3Title: '千万曲库  首首CD音质',
    pTitle: '囊括百万无损SQ音乐，你在用手机听歌时，<br/>也能感受到纤毫毕现的CD音质，更能免费离线收听',
    imgSrc: content1,
  },
  {
    h3Title: '千位明星  亲自推荐音乐',
    pTitle: '韩红，戴佩妮等<em>千位明星已入驻</em>，亲自创建私房歌单，录制独<br />家DJ节目，推荐他们心中的好音乐',
    imgSrc: content2,
  },
  {
    h3Title: '社交关系  发现全新音乐',
    pTitle: '你可以<em>关注明星</em>、DJ和好友，通过浏览他们的动态、收藏和<br />分享，发现更多全新好音乐',
    imgSrc: content3,
  },
  {
    h3Title: '手机电脑  歌单实时同步',
    pTitle: '只要一个帐号，你就可以同步在手机、电脑上创建、收藏<br />的歌单，<em>随时随地畅享好音乐</em>',
    imgSrc: content4,
  },
  {
    h3Title: '听歌识曲  助你疯狂猜歌',
    pTitle: '歌曲很动听却不知道歌名，歌名在嘴边却想不起来……<br />用<em>听歌识曲</em>功能，几秒钟就知道歌名',
    imgSrc: content5,
  },
]