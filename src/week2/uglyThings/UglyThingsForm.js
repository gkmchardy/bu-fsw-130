import React, { Component } from 'react'
import { ContextConsumer } from './UglyThingsContext.js'

class Form extends Component {
  state = {
    listUpdate: [],
    uglyTitle: '',
    uglyImage: '',
    uglydescription: '',
    comments: [],
    comment: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  uglyUpdate = (e, context) => {
    e.preventDefault()
    this.setState({
      listUpdate: [
        ...context.uglyLists,
        {
          uglyTitle: this.state.uglyTitle,
          uglydescription: this.state.uglydescription,
          uglyImage: this.state.uglyImage,
          comments: this.state.comments,
        },
      ],
      uglyTitle: '',
      uglydescription: '',
      uglyImage: '',
      comments: [],
    })
    
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
        <form>
            <div className="form-wrapper">
                <br /><br />
                <div className='th' style={{gridColumn:"span 3"}}>The Ugliest Cars Ever Made</div>

                <div className="td">
                    <input
                        className='inputs'
                        type='text'
                        name='uglyTitle'
                        value={this.state.uglyTitle}
                        placeholder='Make & Model'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="td">
                    <input
                        className='inputs'
                        type='text'
                        name='uglydescription'
                        value={this.state.uglydescription}
                        placeholder='Ugly Description'
                        onChange={this.handleChange}
                    />
                </div>
                <div className="td">
                    <input
                        className='inputs'
                        type='text'
                        name='uglyImage'
                        value={this.state.uglyImage}
                        placeholder='Ugly Image'
                        onChange={this.handleChange}
                    />
                </div>

                <div style={{gridColumn:"span 2"}}></div>
                <div className="td">
                    <input
                        className='submit'
                        type='submit'
                        onClick={(e) => {
                            this.uglyUpdate(e, context)
                        }}
                        value='Submit'
                    />
                </div>
            </div>
            <br /><br />
        </form>
        )}
      </ContextConsumer>
    )
  }
}

export default Form