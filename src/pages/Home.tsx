import React, { useState, useEffect } from 'react';
import { HomeWrap, Header, Logo, User, Avatar } from './HomeStyle';
import ajax from 'utils/ajax';

const id = require('utils/id');
const user = 'https://api.dribbble.com/v2/user/';

const Home: React.FC<any> = () => {
    const [userName, setUserName] = useState(''),
        [avatarSrc, setAvatarSrc] = useState('');
    useEffect(() => {
        ajax({ url: `${id.cors}${user}shots?page=1` }, (data) => {
            console.log(data);
        });
        ajax({ url: `${id.cors}${user}` }, (data) => {
            if (data.avatar_url) setAvatarSrc(data.avatar_url);
            if (data.name) setUserName(data.name);
            console.log(data);
        });
    }, []);
    return (
        <HomeWrap>
            <Header>
                <Logo src="/img/logo.svg" alt="logo" />
                {userName ? (
                    <User>
                        {userName}
                        <Avatar src={avatarSrc} alt="avatar" />
                    </User>
                ) : null}
            </Header>
        </HomeWrap>
    );
};
export default Home;
