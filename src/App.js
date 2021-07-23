import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-monokai'
import "ace-builds/src-noconflict/ext-language_tools";
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeh=this.onChangeh.bind(this);
    this.state={
      html:``,
    }
  }
  onChangeh(e)
  {
    this.setState({
      html:e
    });
  }
  render() {
  return (
    <div>
      <div style={{position: "relative",
      left: "10px",
      top: 10,
      width:500
      }}>
      <center><h1>HTML</h1></center>
      <AceEditor
      style={{
        border: "3px solid #73AD21"
      }}
  placeholder="ASSUME YOU ARE WRITING IN BODY DIRECTLY"
  mode="html"
  theme="monokai"
  onChange={this.onChangeh}
  fontSize={20}
  showGutter={true}
  highlightActiveLine={true}
  setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
    </div>
    <div
    style={{position: "relative",
    left: "10px",
    }}>
    <center><h1>PREVIEW</h1></center>
    <div>
      {this.state.html}
    </div>
    </div>
    </div>
  );
  }
}

export default App;
