import React, { Component } from 'react'
import { ContextConsumer } from './UglyThingsContext.js'

class Things extends Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  uglyUpdate = (e, context) => {
    context.updateItems([
      ...context.uglyLists,
      {
        uglyTitle: this.state.uglyTitle,
        uglydescription: this.state.uglydescription,
        uglyImage: this.state.uglyImage,
        comments: this.state.comments,
      },
    ])
  }

  newComments = (e, context, index) => {
    this.setState({
      comments: [...context.uglyLists[index].comments, e.target.value],
      comment: '',
    })
    var array = context.uglyLists
    Object.assign(array[index], {
      comments: [...context.uglyLists[index].comments, e.target.value],
    })
    context.updateItems(array)
  }
  render() {
    return (
      <ContextConsumer>
        {(context) => (
            <div className="things-wrapper">
              {context.uglyLists.map((uglyInfo, index) => (
                <div id={index} key={index}>
                  <div className='th'>
                    {uglyInfo.uglyTitle}
                    <button style={{ float:"right", padding:"2px", borderRadius:"3px", backgroundColor:"red"}} onClick={context.uglyDelete} id={index}>Delete</button>
                  </div>
                  <div className='td'><img src={uglyInfo.uglyImage} style={{ width:"90%", height:"90%", padding:"10px"}} alt='' /></div>
                  <div className='td'>{uglyInfo.uglydescription}</div>
                  <br />
                  <div className='td'>
                    <input
                      name='comment'
                      type='text'
                      onChange={this.handleChange}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          this.newComments(e, context, index)
                        }
                      }}
                      placeholder='Add Your Own Comment'
                    />
                    {uglyInfo.comments.map((comment, i) => (
                      <div className='td'>
                          {comment}{' '}
                          <button
                            style={{ padding:"3px", borderRadius:"3px", backgroundColor:"red"}}
                            onClick={(e) => context.uglyCommentDelete(e, index)}
                            id={i}
                          >X</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        )}
      </ContextConsumer>
    )
  }
}

export default Things