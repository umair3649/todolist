import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';
import Profile from '../views/Profile';
import Admin from '../views/Admin';
import Employees from '../views/Employees';
import addEmployee from '../views/addEmployee';
import addAdmin from '../views/addAdmin';
import userRecord from '../views/userRecord';
import addUser from '../views/addUser';
import classRecord from '../views/classRecord';
import addClass from '../views/addClass';
import alertNotifications from '../views/alertNotifications';
import makeNotifications from '../views/makeNotifications';
import thresholdRecord from '../views/thresholdRecord';
import addThreshold from '../views/addThreshold';
import addTask from '../views/addTask';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
            <Route path="addTask" component={addTask}></Route>
            {/* <Route path="minor" component={MinorView}> </Route>
            <Route path="profile" component={Profile}></Route>
            <Route path="admin" component={Admin}></Route>
            <Route path="employees" component={Employees}></Route>
            <Route path="addEmployee" component={addEmployee}></Route>
            <Route path="addAdmin" component={addAdmin}></Route>
            <Route path="userRecord" component={userRecord}></Route>
            <Route path="addUser" component={addUser}></Route>
            <Route path="classRecord" component={classRecord}></Route>
            <Route path="addClass" component={addClass}></Route>
            <Route path="alertNotifications" component={alertNotifications}></Route>
            <Route path="makeNotifications" component={makeNotifications}></Route>
            <Route path="thresholdRecord" component={thresholdRecord}></Route>
            <Route path="addThreshold" component={addThreshold}></Route> */}
           
        </Route>
    </Router>

);