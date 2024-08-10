import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterLogin from './components/RegisterLogin';
import Profile from './components/Profile';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="App">
                {isAuthenticated && <Navbar onLogout={handleLogout} />}
                <Switch>
                    {isAuthenticated ? (
                        <>
                            <Route path="/profile" component={Profile} />
                            <Redirect to="/profile" />
                        </>
                    ) : (
                        <>
                            <Route path="/" exact>
                                <RegisterLogin onLogin={handleLogin} />
                            </Route>
                            <Redirect to="/" />
                        </>
                    )}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
