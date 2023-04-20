import React, { Component} from 'react';
import Topnavigation from "../Components/TopNavigation/Topnavigation";
import Topfixbanner from "../Components/TopBanner/Topfixbanner";
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
                <Topnavigation/>
                <Topfixbanner/>
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