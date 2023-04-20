import React, { Component,Fragment } from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/Css/custom.css';
import {NavLink,Link} from "react-router-dom";
class Topnavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarBack:"navBarBack",
            navBarItem:"navBarItems"
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:"navTitleScroll", navBarItem:"navBarItemsScroll",navBarBack:"navBarBackScroll"});
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:"navTitle", navBarItem:"navBarItems",navBarBack:"navBarBack"});
        }
    }

    toggleBtn=()=>{    
        this.setState({navBarTitle:"navTitleScroll", navBarItem:"navBarItemsScroll",navBarBack:"navBarBackScroll"});
    }
    componentDidMount(){
        window.addEventListener("scroll",this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" className={this.state.navBarBack} collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand><Link className={this.state.navBarTitle} to="/">CareerX</Link></Navbar.Brand>
                    <Navbar.Toggle onClick={this.toggleBtn} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link><NavLink className={this.state.navBarItem} to="/SignIn">Post job</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/Findjob">Find job</NavLink></Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/About">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/Objectives">Objective</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/SignIn">Sign In</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Topnavigation;