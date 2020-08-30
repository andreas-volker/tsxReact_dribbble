import React, { useState, useEffect, MouseEvent } from 'react';
import { HomeWrap, Header, Logo, User, Avatar, Gallery, Modal } from './HomeStyle';
import ajax from 'utils/ajax';

const id = require('utils/id');
const user = 'https://api.dribbble.com/v2/user/';

const Home: React.FC<any> = () => {
    const [userName, setUserName] = useState(''),
        [avatarSrc, setAvatarSrc] = useState(''),
        [modalIndex, setModalIndex] = useState(-1),
        [shots, setShots] = useState<any[]>([]);
    const openModal = (e: MouseEvent) => {
        const el: HTMLElement | null = e.currentTarget as HTMLElement,
            index = parseInt(el?.dataset.index || '0', 10);
        setModalIndex(index);
    };
    useEffect(() => {
        ajax({ url: `${id.cors}${user}shots?page=1` }, (data) => {
            setShots(data.reverse());
        });
        ajax({ url: `${id.cors}${user}` }, (data) => {
            if (data.avatar_url) setAvatarSrc(data.avatar_url);
            if (data.name) setUserName(data.name);
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
            <Gallery>
                {shots.map((item, index) => {
                    return (
                        <li key={index}>
                            <img onClick={openModal} data-index={index} src={item.images.normal} alt={item.title} />
                        </li>
                    );
                })}
            </Gallery>
            {modalIndex >= 0 ? <Modal>{modalIndex}</Modal> : null}
        </HomeWrap>
    );
};
export default Home;
