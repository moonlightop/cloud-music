// 轮播图自动滚动
export const autoRotate = (setImgStyle) => {
  return setInterval(() => {
    // console.log("1-淡入");
    setImgStyle({
      transition: 'opacity 1s ease-in 0s',
      opacity: 0.2
    })
  },4000)

};

// 计算播放量
export const CalcPlayCount = (count) => {
  const newCount = Math.floor(count / 10000);
  if(newCount < 1) {
    // < 1万
    return count;
  }else if(newCount >= 1 && newCount < 10000) {
    // 1万 ~ 1亿
    return newCount + '万';
  }else if(newCount >= 10000) {
    // >= 1亿
    return Math.floor(newCount / 10000) + '亿';
  }

}

// 拼接获取图片链接的大小
export const SetPitureSize = (url,size) => {
  return `${url}?param=${size}y${size}`;
} 
// 获取播放音乐的链接
export const getPlayUrl = (id) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}


// 格式化时间
export const formatDate = (time, fmt) => {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, 
      (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      // 匹配到的第一个子表达式
      fmt = fmt.replace(RegExp.$1, 
        (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

// 不懂padLeftZero的作用
export const padLeftZero = (str) => {
  return ('00' + str).substr(str.length);
};

export const formatMonthDay = (time) => {
  return formatDate(time, "MM月dd日");
}

export const formatMinuteSecond = (time) => {
  return formatDate(time, "mm:ss");
}


// 格式化歌词
export const formatLyrics = (lyrics) => {
  const lyricReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  lyrics = lyrics.split('\n');
  const formatLyric = []
  
  for(let line of lyrics) {
    if(!line) continue; // 避免空格
    const line_time = lyricReg.exec(line);
    if(!line_time) continue; // 避免该行没有内容可以匹配上
    // 转毫秒 + 该行歌词
    const lineAllTime = (line_time[1] * 60 * 1000) + (line_time[2] * 1000) + (line_time[3].length === 3 ? line_time[3] * 1 : line_time[3] * 10);
    const lineContent = line.replace(lyricReg,'').trim();
    formatLyric.push({
      time: lineAllTime,
      content: lineContent
    });

  }

  return formatLyric;
}
