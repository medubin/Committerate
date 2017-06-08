import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// react components
import App from './app'
import SessionForm from '../session/components/session_form'
import Landing from '../landing/landing'


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
       <Router history={hashHistory}>
         <Route path="/" component={App}>
           <IndexRoute component={Landing} onEnter={_ensureLoggedIn} />
           <Route path="/login" component={SessionForm} onEnter={_redirectIfLoggedIn} />
           <Route path="/signup" component={SessionForm} onEnter={_redirectIfLoggedIn} />
         </Route>
       </Router>
     </Provider>
   );


}


export default Root;
