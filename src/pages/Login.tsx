import React, { useEffect } from 'react';
import ajax from 'utils/ajax';
import { LoginWrap, Logo, Entrar, Loading, LoadingText } from './LoginStyle';

const id = require('utils/id');

const authCode = () => {
    ajax(
        {
            method: 'POST',
            url: `${id.cors}https://dribbble.com/oauth/token`,
            data: JSON.stringify({
                client_id: id.client,
                client_secret: id.secret,
                code: localStorage.code,
            }),
        },
        (data) => {
            localStorage.token = data.access_token;
            window.location.replace('/home');
        },
    );
};
const authError = (err: string) => {
    alert(`error: ${err}`);
};
const authClick = () => {
    const url = `https://dribbble.com/oauth/authorize?client_id=${id.client}&scope=public upload`,
        win = window.open(url, 'name', 'height=600,width=450');
    if (win?.focus) win.focus();
};
export const Login: React.FC<any> = () => {
    useEffect(() => {
        window.addEventListener('storage', (e: StorageEvent) => {
            if (!e.newValue) return;
            if (e.key === 'code') authCode();
            else if (e.key === 'error') authError(e.newValue);
        });
    }, []);
    return (
        <LoginWrap>
            <Logo src="/img/logo.svg" className="App-logo" alt="logo" />
            <Entrar onClick={authClick}>Entrar</Entrar>
        </LoginWrap>
    );
};

export const LoginResponse: React.FC<any> = () => {
    useEffect(() => {
        let params: any = window.location.search
            .slice(1)
            .split('&')
            .map((p) => p.split('='))
            .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
        localStorage.removeItem('error');
        if (params.code) {
            setTimeout(() => {
                localStorage.code = params.code;
                window.close();
            }, 1000);
        } else {
            localStorage.removeItem('code');
            localStorage.error = params.error || 'unknown_error';
            window.close();
        }
    }, []);
    return (
        <Loading>
            <LoadingText>Acessando...</LoadingText>
        </Loading>
    );
};
