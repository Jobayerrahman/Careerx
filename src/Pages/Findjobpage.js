import React, { Component,Fragment } from 'react';
import Topnavigation from '../Components/TopNavigation/Topnavigation';
import Pagetop from '../Components/TopBanner/Pagetop';
import Footer from '../Components/FooterContent/Footer';
import Findjob from '../Components/RecentJob/Findjob';
class Findjobpage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Topnavigation/>
                <Pagetop pagetilte="Find your job"/>
                <Findjob/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Findjobpage;