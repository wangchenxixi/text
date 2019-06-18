import React, { Component } from 'react'
import Editor from 'for-editor'

class Markdown extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return (
      <Editor value={value} height="auto" onChange={this.handleChange.bind(this)} />
    )
  }
}

export default Markdown;