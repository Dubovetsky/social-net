import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import SidebarDialogs from './components/Sidebar/SidebarDialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content' >
          <Route path='/dialogs' 
                 render={ () => <DialogsContainer />} />
          <Route path='/dialog1' 
                 render={ () => <DialogsContainer />} />
          <Route path='/dialog2' 
                 render={ () => <DialogsContainer />} />
          <Route path='/dialog3' 
                 render={ () => <DialogsContainer />} />
          <Route path='/profile'
                 render={ () =><Profile/>} />
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
      </div>
    </BrowserRouter>
  );
}
export default App;
