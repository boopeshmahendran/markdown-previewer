import React, { Component } from 'react';
import MarkdownPreviewer from './components/MarkdownPreviewer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Markdown Previewer</h2>
        <MarkdownPreviewer />
      </div>
    );
  }
}

export default App;
