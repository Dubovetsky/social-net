import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import SidebarDialogs from './components/Sidebar/SidebarDialogs';
import Dialog1 from './components/Dialogs/Dialog1';
import Dialog2 from './components/Dialogs/Dialog2';
import Dialog3 from './components/Dialogs/Dialog3';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content' >
          <Route path='/dialogs' 
                 render={ () => <Dialogs store={props.store} />} />
          <Route path='/dialog1' 
                 render={ () => <Dialog1 store={props.store} />} />
          <Route path='/dialog2' 
                 render={ () => <Dialog2 store={props.store} />} />
          <Route path='/dialog3' 
                 render={ () => <Dialog3 store={props.store} />} />
          <Route path='/profile'
                 render={ () =><Profile 
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <div className='sidebar-wrapper-content' >
          <Route path='/dialogs' 
                 render={ () => <SidebarDialogs />} />
          <Route path='/dialog1' 
                 render={ () => <SidebarDialogs />} />
          <Route path='/dialog2' 
                 render={ () => <SidebarDialogs />} />
          <Route path='/dialog3' 
                 render={ () => <SidebarDialogs />} />
          <Route path='/profile'
                 render={ () =><Sidebar />} />
          <Route path='/news' render={ () =><Sidebar />} />
          <Route path='/music' render={ () =><Sidebar />} />
          <Route path='/settings' render={ () =><Sidebar />} />
        </div>
        {/* <Sidebar /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
