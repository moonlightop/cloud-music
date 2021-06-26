
import React, { PureComponent } from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import { nanoid } from 'nanoid'
import './Transitiongroup.less'

export default class Transitiongroup extends PureComponent {
  
  state = {
    users: [
      { name: 'hao', key: '-1' },
      { name: 'moon', key: '-2 ' },
      { name: 'light', key: '-3' }
    ]
  }
  
  addUser = () => {
    const { users } = this.state
    this.setState({
      users: [...users,{name:'new-user',id: nanoid()}]
    })
  }

  render() {
    const { users } = this.state

    return (
      <>
        <TransitionGroup>
          {
            users.map(userx => {
              return (
                <CSSTransition
                  key={users.key}
                  classNames='li'
                  timeout={1000}
                >
                  <button onClick={e => this.setState({
                    users: users.filter(usery => usery.name !== userx.name)
                  })} key={users.key}>{userx.name}</button>
                </CSSTransition>                   
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.addUser}>添加</button>
      </>
    )
  }
}
