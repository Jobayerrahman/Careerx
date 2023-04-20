import React, { Component,Fragment } from 'react';
import Topnavigation from '../Components/TopNavigation/Topnavigation';
import Pagetop from '../Components/TopBanner/Pagetop';
import Footer from '../Components/FooterContent/Footer';
import Objectivecontent from '../Components/Objectives/Objectivecontent';
class Objectivepage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Topnavigation/>
                <Pagetop pagetilte="Objectives"/>
                <Objectivecontent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Objectivepage;