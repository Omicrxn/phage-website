import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/NavBar'
import { Nav } from 'react-bootstrap';


import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Services from './pages/Services'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Phage',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Your dream',
        title2: 'our reality',
        subTitle: 'With Phage design and technology become one to bring your dreams to life.'
      },
      portfolio: {
        title: 'Portfolio'

      },
      contact: {
        title: 'We are here for you'

      }
    }
  }
  render(){
    return (
        <Router>
          <Container className="" fluid={false}>
            <NavBar id="navbar-expanded" className="d-lg-flex d-none">
              <Nav className="w-50">
                <Nav.Link className="nav-link nav-text" to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link className="nav-link nav-text" to="/services">Services</Nav.Link>
                <Nav.Link className="nav-link nav-text" to="/contact">Contact</Nav.Link>
              </Nav>
              <Container>
              <NavBar.Brand as={Link} to="/" className="mx-auto"><img className="nav-brand" src={process.env.PUBLIC_URL + '/images/Lettering.png'}/></NavBar.Brand>
              </Container>              
              <Nav className="w-50 justify-content-end">
              <a target="blank" className="nav-link nav-text" href="https://twitter.com/PhageDev"><img className="social-links" src={process.env.PUBLIC_URL + '/images/Twitter.png'}/></a>
                  <a target="blank" className="nav-link nav-text" href="https://www.instagram.com/phage.dev/"><img className="social-links" src={process.env.PUBLIC_URL + '/images/Instagram.png'}/></a>
              </Nav>
            </NavBar>

            <NavBar id="navbar-expanded" expand="lg" className="d-lg-none">
            <NavBar.Brand as={Link} to="/" className=""><img className="nav-brand" src={process.env.PUBLIC_URL + '/images/Lettering.png'}/></NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav" className="w-50">
                <Nav>
                  <Nav.Link className="nav-link nav-text" to="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link className="nav-link nav-text" to="/services">Services</Nav.Link>
                  <Nav.Link className="nav-link nav-text" to="/contact">Contact</Nav.Link>
                </Nav>
              </NavBar.Collapse>
            </NavBar>
            {/* <NavBar expand="lg" collapseOnSelec>
            <NavBar.Toggle className="border-0"aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav" className="w-50">
                <Nav>
                  <Nav.Link className="nav-link nav-text" to="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link className="nav-link nav-text" to="/services">Services</Nav.Link>
                  <Nav.Link className="nav-link nav-text" to="/contact">Contact</Nav.Link>
                </Nav>
              </NavBar.Collapse>
              <Container>
              <NavBar.Brand as={Link} to="/" className="mx-auto"><img className="nav-brand" height="25" src={process.env.PUBLIC_URL + '/images/Lettering.png'}/></NavBar.Brand>
              </Container>
              <NavBar.Collapse id="responsive-navbar-nav2" className="w-50">
                <Nav>
                  <a target="blank" className="nav-link nav-text pr-3" href="https://twitter.com/PhageDev"><img className="social-links" src={process.env.PUBLIC_URL + '/images/Twitter.png'}/></a>
                  <a target="blank" className="nav-link nav-text" href="https://www.instagram.com/phage.dev/"><img className="social-links" src={process.env.PUBLIC_URL + '/images/Instagram.png'}/></a>
                </Nav>
              </NavBar.Collapse>
            </NavBar> */}
            <Route  path="/" exact render={() => <Home title={this.state.home.title} title2={this.state.home.title2} subTitle={this.state.home.subTitle}/>}/>
            <Route path="/portfolio" exact render={() => <Portfolio title={this.state.portfolio.title} />}/>
            <Route path="/contact" exact render={() => <Contact title={this.state.contact.title}/>}/>
            <Route path="/services" exact render={() => <Services title={this.state.contact.title}/>}/>
          </Container>
        </Router>
      );
  }

}

export default App;
