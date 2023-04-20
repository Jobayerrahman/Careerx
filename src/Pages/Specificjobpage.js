import React, { Component,Fragment } from 'react';
import Topnavigation from '../Components/TopNavigation/Topnavigation';
import Pagetop from '../Components/TopBanner/Pagetop';
import Footer from '../Components/FooterContent/Footer';
import Specificjob from '../Components/JobCategories/Specificjob';
class Specificjobpage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Topnavigation/>
                <Pagetop pagetilte="Job category name"/>
                <Specificjob/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Specificjobpage;