import React, { Component,Fragment } from 'react';
import Topnavigation from '../Components/TopNavigation/Topnavigation';
import Pagetop from '../Components/TopBanner/Pagetop';
import Footer from '../Components/FooterContent/Footer';
import Applyjob from '../Components/JobCategories/Applyjob';
class Applyjobpage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Topnavigation/>
                <Pagetop pagetilte="Apply a job"/>
                <Applyjob/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Applyjobpage;