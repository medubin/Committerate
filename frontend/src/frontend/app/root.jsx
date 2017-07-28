import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// react components
import App from './App'
import SessionForm from '../session/components/session_form'
import Landing from '../landing/components/landing'
import NewActivityForm from "../activity/components/new_activity_form/new_activity_form"
import ActivitiesList from "../activity/components/activities_list/activities_list"



const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  return (
    <Provider store={store}>
       <Router history={browserHistory}>
         <Route path="/" component={App}>
           <IndexRoute component={Landing} onEnter={_ensureLoggedIn} />
           <Route path="/login" component={SessionForm} onEnter={_redirectIfLoggedIn} />
           <Route path="/signup" component={SessionForm} onEnter={_redirectIfLoggedIn} />
           <Route path="/activity/new" component={NewActivityForm} onEnter={_ensureLoggedIn} />
           <Route path="/activity/" component={ActivitiesList} onEnter={_ensureLoggedIn} />
         </Route>
       </Router>
     </Provider>
   );


}


export default Root;
