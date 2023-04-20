import React, { Component,Fragment } from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Loginhomepage from '../Pages/Loginhomepage';
import Findjobpage from '../Pages/Findjobpage';
import Objectivepage from '../Pages/Objectivepage';
import Signinpage from '../Pages/Signinpage';
import Signuppage from '../Pages/Signuppage';
import Postjobpage from '../Pages/Postjobpage';
import Aboutpage from '../Pages/Aboutpage';
import Specificjobpage from '../Pages/Specificjobpage';
import Jobdetailspage from '../Pages/Jobdetailspage';
import Applyjobpage from '../Pages/Applyjobpage';
class Approute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/Home" component={Loginhomepage}/>
                    <Route exact path="/Findjob" component={Findjobpage}/>
                    <Route exact path="/Objectives" component={Objectivepage}/>
                    <Route exact path="/About" component={Aboutpage}/>
                    <Route exact path="/SignIn" component={Signinpage}/>
                    <Route exact path="/SignUp" component={Signuppage}/>
                    <Route exact path="/Postjob" component={Postjobpage}/>
                    <Route exact path="/Specificjob" component={Specificjobpage}/>
                    <Route exact path="/Jobdetails" component={Jobdetailspage}/>
                    <Route exact path="/Applyjob" component={Applyjobpage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default Approute;