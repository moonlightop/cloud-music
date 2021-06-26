# react练手训练

## 项目说明

> 参考

- cloud-music：https://github.com/coderwhy/hy-react-web-music
- API接口：https://github.com/Binaryify/NeteaseCloudMusicApi

> 技术栈

- react + redux/redux-thunk + styled-components + immutable

> 项目开发规范

- 采用styled-component来书写样式（css in js）

- 命名规范

  - 文件夹和文件命名统一采用小写，多个字母间用-连接
  - 组件采用大驼峰命名，自定义变量和函数用小驼峰命名，常量全部大写

- 采用函数式组件开发，全面拥抱hooks

- 网络请求采用axios，并对其进行二次封装，而所有的网络请求接口单独封装在另一个文件中统一管理

- 为了方便管理网络请求的数据，将其放入到redux中

  > 方便了数据的查看，但我觉得不符合redux的存储共享状态的理念

> [normalize.css](https://necolas.github.io/normalize.css/) + 自定义base.css（一些通用样式以及精灵图）初始化全局样式

> 目录结构说明

```markdown
├─assets                  // 静态资源
│  ├─css
│  ├─font
│  └─img
├─common              // 公共常量
├─components         // 公共组件
├─hooks             // 公用hook
├─pages            // 路由组件
├─redux                    
├─router         // 路由配置
├─services      // 网络请求
└─utils        //  工具函数
```

> 路由

<img src="C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210605212236221.png" alt="image-20210605212236221" style="zoom:80%;" />

## 总结

### 易错点

- 尽量不要给父盒子定宽高，而是通过子盒子撑开，以及可以用padding来展示图片（一些小图标之类的）

- 经常需要通过伪类（`:hover`  或  `:active`）来切换精灵图，从而达到一个高亮的效果

  - 从精灵图	=>	HTTP/1中通常使用精灵图或内联资源可以减少请求次数，但会增加请求报文的大小，且不利于缓存	=>	HTTP/2中不能达到性能优化的效果

- Login组件中拖动登录框的实现  =>  拖动方块的实现

- Login组件的登录功能   =>   Token  Session  通过Cookie的携带来进行用户身份确认    =>    存储  缓存  代理等

- loading组件地实现原理    =>   四分之三的圆不断地转圈圈

- 多级路由选中的思路

  > withRouter包裹	=>	路由组件	=>	判断URL的Path是否包含该路由的Path，以及单独排除特殊情况（跳转到/路由，/discover对应的推荐也要选中）

### 难点

- 无缝轮播图

  - 最前面添加需要展示的最后一张图片，当轮播到第一张图片时以  `没有过渡效果`  立即（transitionend监听）跳转到倒数第二张；最后面添加需要展示的第一张图片，当轮播到最后一张图片时以  `没有过渡效果`  立即跳转到第二张（transitionend监听）；其余情况是有  `过渡效果`  

    > 自动轮播的定时器中设置过渡效果等，动画时间需要小于定时器的时间间隔

- 淡入淡出轮播图

  - 开启定时器每隔一段时间修改它的transition样式	=>	组件重新render	=>	transitionend监听到，并通过e.target.style.transition的值来进行不同的操作

    - opacity 1s ease-in 0s（当前图片淡出完成）

      - 切换到下一张，修改它的transition样式为 opacity 1s ease-out 0s

        > 两个setState后，组件是如何更新的（重新render两次的）

    - opacity 1s ease-out 0s（下一张图片淡入完成）

      - 恢复正常的transition样式（none 0s ease 0s）

    > transition值从初始的none 0s ease 0s	=>	opacity 1s ease-in 0s（当前图片淡出）

  - 点击圆圈切换则是通过标签上的index属性来区分它是第几张图片（从0开始）

    - e.target.getAttribute('index')

  - 左右箭头直接修改索引来展示相应图片即可

    - currentIndex代表当前展示的图片索引（从0开始）

  - 鼠标移出与移动滚动条使得轮播图不在显示区域，清除自动轮播的定时器；移入则重新开启

    - 定时器标识如何保存，通过useRef

- 新碟上架的无缝轮播图

  > 通过数组来存储当前图片的Left，相邻的元素，即为理想的相邻图片

  - 右箭头：当前图片和左隔壁一张图片有    `过渡效果`    的向右走一张
  - 经过两次transitionend后，将它们的过渡效果设置为none，为了下一次轮播能保持相同效果，需要保持1 0 -1（即将当前图片的左隔壁一张图片的索引设置为-1）

  ![image-20210624154244622](https://user-images.githubusercontent.com/48879887/123497622-1eb0b100-d661-11eb-9996-84cb8138abd4.png)


- 音乐栏
  - 获取一首歌曲作为currentSong的默认值
    - 通过video的onProcess来改变灰色进度条的长度（歌曲下载进度）
    - onTimeUpdate来改变播放进度（毫秒时间）和检测当前播放的时间来切换歌词
      - onTimeUpdate的回调函数与拖拽进度条或点击位置改变进度播放歌曲间的改变当前播放时间（setCurrentTime）是互斥的
    - 点击播放或暂停，改变isPlay，根据值决定播放还是暂停歌曲
    - 由播放方式来决定歌曲切换的方式
      - 顺序
      - 随机
      - 单曲循环
    - 加载音频的Loading图标
      - onWaiting	=>	onCanPlay & onCanPlayThrough
    - 锁与播放栏的显示与隐藏
      - onMouseEnter 、onMouseLeave（不支持事件流模型的冒泡阶段）
      - onMouseover   、onMouseOut
  - 歌词解析
    - 用RegExp.exec()匹配时间戳，将所有子表达式换算为毫秒
    - 再用line.replace(lyricReg,'')将时间戳置换为空格
  - 播放列表
    - 虚化背景图（z-index的效果）
    - 歌词滚动
      - 点击到达的位置占的百分比，根据歌词长度换算到歌词索引（拖动时transition失效，抬起时transition有效）
    - 歌曲列表滚动
      - 点击到达的位置占的百分比，根据歌曲列表长度换算到歌曲索引
  - 音量控制条
    - 同理播放进度条



- 工具函数

  - 日期格式化（为了时间能按我们指定格式展示）

    - 若原本就是26号，而你指定格式为1位，那么此时也应该按事实去展示
    - 若原本为6号，而我指定格式为2位，那么此时应该通过  '00'  和  substring来保证格式相同
    - 年同理，若原本为2021年，而我指定格式为2位，应该用substring(4 - Reg.$1.length)

    > new RegExp(' (${i}) ').test(fmt)

  - 拖动方块
    ![image-20210508202917601](https://user-images.githubusercontent.com/48879887/123497607-0f316800-d661-11eb-9942-16c2a08d1c65.png)
    


- 性能优化
  - removeEventListener（及时移除监听事件，防止内存泄漏）
  - 防抖节流（搜索框防抖或下拉刷新节流）
  - 用懒加载减少首屏加载需要的时间（按需请求）

