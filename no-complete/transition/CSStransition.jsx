import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import './CSStransition.less'

export default class CSStransition extends PureComponent {
  
  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    };

  }
  
  render() {
    const {isShow} = this.state;
    return (
      <>
        <button onClick={(e) => { this.setState({isShow: !isShow}) }}>显示/隐藏</button>

        <CSSTransition 
          in={isShow} // 显示/隐藏 -> boolean
          classNames='squ' 
          timeout={1000} // timeout是enter-active持续时间
          unmountOnExit={true} // 在Exit时卸载包裹的元素
          appear // 启用appear,true时包裹的元素的第一次动画
          onEnter={el => console.log('开始进入--CSSTransition包裹的元素',el)}
          onEntering={el => console.log('正在进入--',el)}
          onEntered={el => console.log('进入完成--',el)}

          onExit={el => console.log('开始退出--',el)}
          onExiting={el => console.log('正在退出--',el)}
          onExited={el => console.log('退出完成--',el)}
        >
          <div className="test">
          </div>
        </CSSTransition>

        {/* 

            开始状态：
                      true:  appear === enter （触发时机不同）
                      false: exit
            活跃状态：appear-active ...
            结束状态：appear-done ...

        */}
      
      </>
    )
  }
}
