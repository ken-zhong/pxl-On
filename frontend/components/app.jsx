import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import Header from './header/header';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import AboutPage from './about_page';
import UserProfileContainer from './user_profile/user_profile_container';
import UploadFormContainer from './upload/upload_container';
import PhotoContainer from './photos/photo_show_container';
import Err404 from './404';

// <ProtectedRoute exact path='/upload' component={UploadFormContainer} />

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <Route path='/about' component={AboutPage} />
      <Route path='/discover' component={AboutPage} />
      <ProtectedRoute exact path='/home' component={HomeContainer} />
      <Route exact path='/oops' component={Err404} />
      <Route exact path='/:username' component={UserProfileContainer} />
    </Switch>
    <Route path='/photos/:photoId' component={PhotoContainer} />
    <UploadFormContainer />
  </div>
);

export default App;
