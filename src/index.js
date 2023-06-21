import React from 'react'
import ReactDom from 'react-dom'
import MustaphaL from './images/MustaphaL.jpeg'

// Headr Componenet 
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      title,
      name,
      job
    } = this.props.data
    return (
      <header>
        <div className='head'>
          <h1>{title}</h1>
          <img src={MustaphaL} alt='Mustapha' />
          <p>{name}</p>
          <h4>{job}</h4>
        </div>
      </header>
    )
  }
}

// Create a techlist that have all the skills 

class Techlist extends React.Component {
    constructor(props) {
    super(props)
  }
  render() {
        const Tech = ['HTML', 'CSS', 'JavaScript', 'Prompt Enginnering', 'Solidity', 'Python', 'PineScript']
        const TechFormated = Tech.map((skill) => <li key={skill}>{skill}</li>)
        return TechFormated
  }
}

// Main Section
class Main extends React.Component {
    constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className='main'>
            <p>My Humble Skills ar :</p>
            <ul>
              <Techlist />
            </ul>
        </div>
      </main>
    )
  }
}

//Create The Footer 

class Footer extends React.Component {
    constructor(props) {
    super(props)
  }
  render() {
    return(
      <footer>
        <div className="foot">
          <p>Made With Love By MHL</p>
        </div>
      </footer>
    )
  }
}

// Button component
const Button = ({text, onClick}) => {
    return(<button className='Chbg' onClick={onClick}>
    {text}
  </button>)
}

// Create The App

class App extends React.Component {
    state = {
      style:{
        background:'',
        color:''
      }
    }

  changeBackground = () => {
    const cbg = this.state.style.background;
    const bg = cbg ===  "#eee" ? 'black' : "#eee";
    this.setState({
      style: {
        ...this.state.style,
        background : bg
      }
    },
    () => {
      this.changeColor();
    }
    );

  };
  changeColor = () => {
    const curBg = this.state.style.background;
    const col = curBg ===  "#eee" ? 'black' : "white";
    this.setState({
      style: {
        ...this.state.style,
        color: col
      }
    });
  };
  render() {

    const data = {
      title: 'Welcome My Dear Friend This my First React App',
      name: 'Mustapha Liaichi',
      job: 'Web Scraper/Developer From Morroco'
    }
    return (
      <div className='app' style={this.state.style}>
        <Header data={data}/>
        <Main />
        <Footer />
        <Button text={"Toggle To The Night Mode"} onClick={this.changeBackground} />
      </div>
    )
  }
}
// Get The root Element

const rootElement = document.getElementById('root')

// Render The app

ReactDom.render(<App />, rootElement)
