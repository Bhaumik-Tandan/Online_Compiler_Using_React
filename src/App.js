import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import "ace-builds/src-noconflict/ext-language_tools";
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeh=this.onChangeh.bind(this);
    this.onChangec=this.onChangec.bind(this);
    this.onChangej=this.onChangej.bind(this);
    this.state={
      html:``,
      css:``,
      js:``
    }
  }
  onChangeh(e)
  {
    this.setState({
      html:e
    });
  }
  onChangej(e)
  {
    this.setState({
      js:e
    });
  }
  onChangec(e)
  {
    this.setState({
      css:e
    });
  }
  render() {
  return (
    <div>
      <div style={{position: "relative",
      left: "100px",
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
    <div style={{position: "absolute",
      left: "700px",
      top: 10,
      width:500
      }}>
        <center><h1>CSS</h1></center>
<AceEditor
      style={{
        border: "3px solid #73AD21"
      }}
      onChange={this.onChangec}
  placeholder="ASSUME YOU ARE WRITING IN STYLE DIRECTLY"
  mode="css"
  theme="solarized_dark"
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
    <div style={{position: "absolute",
      left: "1300px",
      top: 10,
      width:500
      }}>
        <center><h1>JS</h1></center>
<AceEditor
      style={{
        border: "3px solid #73AD21"
      }}
      onChange={this.onChangej}
  placeholder="ASSUME YOU ARE WRITING IN SCRIPT DIRECTLY"
  mode="javascript"
  theme="terminal"
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
    <div dangerouslySetInnerHTML={{__html: this.state.html+"<style>"+this.state.css+"</style>"}}>
    </div>
    </div>
    </div>
  );
  }
}

export default App;
