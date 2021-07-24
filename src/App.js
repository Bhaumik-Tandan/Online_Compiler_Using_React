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
    const doc="<html><body>"+this.state.html+"</body>"+
    "<style>"+this.state.css+"</style>"+
    "<script>"+this.state.js+"</script></html>";
  return (
    <div>
      <div style={{position: "relative",
      left: "1.5vw",
      top: "0.5vh",
      width:"30vw"
      }}>
      <center><h3>HTML</h3></center>
      <AceEditor
      style={{
        border: "0.25vh solid #73AD21",
        width: "30vw",
        height: "50vh"
      }}
  placeholder="ASSUME YOU ARE WRITING IN BODY DIRECTLY"
  mode="html"
  theme="monokai"
  onChange={this.onChangeh}
  fontSize={14}
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
      left: "33.5vw",
      top: "0.5vh",
      width:"30vw"
      }}>
        <center><h3>CSS</h3></center>
<AceEditor
      style={{
        border: "0.25vh solid #73AD21",
        width: "30vw",
        height: "50vh"
      }}
      onChange={this.onChangec}
  placeholder="ASSUME YOU ARE WRITING IN STYLE DIRECTLY"
  mode="css"
  theme="solarized_dark"
  fontSize={14}
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
      left: "65.5vw",
      top: "0.5vh",
      width:"30vw"
      }}>
        <center><h3>JS</h3></center>
<AceEditor
      style={{
        border: "0.25vh solid #73AD21",
        width: "30vw",
        height: "50vh"
      }}
      onChange={this.onChangej}
  placeholder="ASSUME YOU ARE WRITING IN SCRIPT DIRECTLY"
  mode="javascript"
  theme="terminal"
  fontSize={14}
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
    style={{position: "absolute",
    top:"60vh",
    left: "1vw",
    right:"1vw"
    }}>
    <center><h3>PREVIEW</h3></center>
    <iframe
    srcdoc={doc}
    width="100%" ></iframe>
    </div>
    </div>
  );
  }
}

export default App;
