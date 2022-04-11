import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="main-content">
                    <Routes>
                        <Route exact path="/"
                               element={<ProfileContainer />}/>

                        {/*<Route path="profile"*/}
                        {/*       element={<Profile  />}/>*/}

                        <Route path="profile"
                               element={<ProfileContainer />}>
                            <Route path=":profileId"
                                   element={<ProfileContainer />}/>
                        </Route>

                        <Route path="messages"
                               element={<DialogsContainer />}>
                            <Route path=":messageId"
                                   element={<DialogsContainer />}/>
                        </Route>
                        <Route path="users" element={<UsersContainer />}/>

                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="login" element={<Login />}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
