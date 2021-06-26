import React, { PureComponent } from 'react'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import './Switchtransition.less'

export default class Switchtransition extends PureComponent {

  state = {
    Title: 'on'
  }

  render() {
    const { Title } = this.state
    console.log(Title)

    return (
      <>
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={Title === 'on' ? 'on' : 'off'} // 内容发生变化
            classNames='btn'
            timeout={1000}
            // appear
            // unmountOnExit={true}
            onEnter={el => console.log('enter')}
            onEntering={el => console.log('entering')}
            onEntered={el => console.log('entered')}
          >
            <button onClick={e => this.setState({Title: Title === 'on' ? 'off' : 'on'})}>{Title}</button>
          </CSSTransition>
        </SwitchTransition>
      </>
    )
  }
}
