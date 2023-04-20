import React, { Component,Fragment } from 'react';
import Topnavigation from '../Components/TopNavigation/Topnavigation';
import Pagetop from '../Components/TopBanner/Pagetop';
import Footer from '../Components/FooterContent/Footer';
import Jobdetails from '../Components/JobCategories/Jobdetails';
class Jobdetailspage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Topnavigation/>
                <Pagetop pagetilte="Job category name"/>
                <Jobdetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Jobdetailspage;