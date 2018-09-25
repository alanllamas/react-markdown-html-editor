import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import logo from './logo.svg';
import './App.css';

const input = `

\`\`\`html

<tag abc="123"/>

const tst = () => {
  alert(1234)
}

\`\`\`
`;

class App extends Component {

  
  constructor( props ) {
    
    super(props)
    
    this.state = {
      input: ''
    }

    this.textInput = React.createRef();

  }

  // componentDidMount = () => {

  //   //this.input = React.createRef();

  // }


  onChangeInput = (e) => {
    
    this.setState({
      input: e.target.value
    });
    
  }

  addTestComponent = () => {
    
    let el = this.textInput.current;

    this.insertAtCaret(
      el,
      '<p style="color:red">Tag Test</p>'
    );

    this.setState({
      input: el.value
    });
    

  }


  insertAtCaret = (el,text) => {
    text = text || '';
    if (document.selection) {
      // IE
      el.focus();
      var sel = document.selection.createRange();
      sel.text = text;
    } else if (el.selectionStart || el.selectionStart === 0) {
      // Others
      var startPos = el.selectionStart;
      var endPos = el.selectionEnd;
      el.value = el.value.substring(0, startPos) +
        text +
        el.value.substring(endPos, el.value.length);
      el.selectionStart = startPos + text.length;
      el.selectionEnd = startPos + text.length;
    } else {
      el.value += text;
    }
  }

  render() {
    return (
      <div className="App">

        <header>
          <ul>
            <li>
              <button onClick={ () => this.addTestComponent() }>
                Añadir un Componente
              </button>
            </li>
          </ul>
        </header>

        <textarea ref={this.textInput} onChange={(e)=>this.onChangeInput(e)}/>

        <ReactMarkdown escapeHtml={false} source={this.state.input} />

      </div>
    );
  }
}

export default App;
