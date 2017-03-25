import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Type your text here'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event);
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div id='MarkdownPreviewer'>
        <textarea value={this.state.text} id='MarkdownPreviewer__pad' onChange={this.handleChange}></textarea>
        <div id='MarkdownPreviewer__markdown'>
          {ReactHtmlParser(marked(this.state.text))}
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
