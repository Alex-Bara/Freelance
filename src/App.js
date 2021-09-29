import './App.css';
import HeaderC from './components/header/headerContainer';
import Footer from './components/footer/footer';
import RightColumn from './components/right_column/rightColumn';
import FindWorkContainer from './components/findWork/FindWorkContainer';
import ProjectCreateContainer from './components/projectCreate/projectCreateContainer';
import {Redirect, Route} from 'react-router';
import UserContainer from "./components/user/userContainer";
import React from "react";
import Home from "./components/homePage/homePageContainer";
import Preloader from "./components/preloader/preloader";
import MessagesContainer from "./components/messages/messagesContainer";
import LoginPage from "./components/login/loginPage";
import Reg from "./components/regForm/reg";


const App = (props) => {
        if(!props.initialized){
            return <Preloader/>
        }
        return (
                <div className="App">
                        <div className='App__inner'>
                            {props.isFetching ? <Preloader/> : null}
                            <Route path='/login' render={() =><LoginPage />}/>

                            <Route path='/reg' render={() =><Reg />}/>

                            <Route exact path='/' render={() => <Home/>}/>

                            <Route exact path={['/contracts', '/create', '/', '/find-work',
                                          '/messages', '/user']}>
                                <HeaderC/>
                            </Route>

                            <Route path='/find-work' render={() => <FindWorkContainer/>}/>
                            <Route path='/messages' render={() => <MessagesContainer/>}/>
                            <Route path='/create' render={() => <ProjectCreateContainer/>}/>
                            <Route path='/user' render={() => <UserContainer/>}/>
                            <Route path={['/contracts']}>
                                <RightColumn/>
                            </Route>

                            <Footer/>
                        </div>
                </div>
        )
}

export default App;
