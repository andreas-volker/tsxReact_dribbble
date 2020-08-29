import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Login, LoginResponse } from 'pages/Login';
import Home from 'pages/Home';

const RoteadorWrap = styled.div`
    height: 100%;
`;

const Roteador: React.FC<any> = (props) => {
    const logar = !localStorage.token;
    return (
        <RoteadorWrap>
            <Router>
                <Switch>
                    <Route exact path="/login-response">
                        <LoginResponse />
                    </Route>
                    {logar ? (
                        <Route path="/login">
                            <Login />
                        </Route>
                    ) : null}
                    {logar ? <Redirect to="/login" /> : null}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </RoteadorWrap>
    );
};
export default Roteador;
