import React, { Component,Fragment } from 'react';
import Topnavigation from '../Components/TopNavigation/Topnavigation';
import Pagetop from '../Components/TopBanner/Pagetop';
import Footer from '../Components/FooterContent/Footer';
import Postjob from '../Components/RecentJob/Postjob';
class Postjobpage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Topnavigation/>
                <Pagetop pagetilte="Post your job"/>
                <Postjob/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Postjobpage;