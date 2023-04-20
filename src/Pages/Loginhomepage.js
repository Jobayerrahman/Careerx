import React, { Component} from 'react';
import Loginnavigation from '../Components/TopNavigation/Loginnavigation';
import Logintopbanner from "../Components/TopBanner/Logintopbanner";
import Jobcategory from "../Components/JobCategories/Jobcategory";
import Objectives from "../Components/Objectives/Objectives";
import Midbanner from "../Components/MidBanner/Midbanner";
import Recentjob from "../Components/RecentJob/Recentjob";
import Footer from '../Components/FooterContent/Footer';
class Homepage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <div>
                <Loginnavigation/>
                <Logintopbanner/>
                <Jobcategory/>
                <Objectives/>
                <Midbanner/>
                <Recentjob/>
                <Footer/>
            </div>
        );
    }
}

export default Homepage;