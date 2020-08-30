import React, { useState, useEffect, MouseEvent } from 'react';
import parse from 'html-react-parser';
import { HomeWrap, Header, Logo, User, Avatar, Gallery, Modal } from './HomeStyle';
import ajax from 'utils/ajax';

const id = require('utils/id');
const user = 'https://api.dribbble.com/v2/user/';

const Home: React.FC<any> = () => {
    const [userName, setUserName] = useState(''),
        [avatarSrc, setAvatarSrc] = useState(''),
        [preloaded, setPreloaded] = useState<number[]>([]),
        [modalIndex, setModalIndex] = useState(-1),
        [shots, setShots] = useState<any[]>([]);
    const openModal = (e: MouseEvent) => {
        const el: HTMLElement | null = e.currentTarget as HTMLElement,
            index = parseInt(el?.dataset.index || '0', 10);
        setModalIndex(index);
    };
    const preloadImg = (e: MouseEvent) => {
        const el: HTMLElement | null = e.currentTarget as HTMLElement,
            index = parseInt(el?.dataset.index || '0', 10);
        if (preloaded.indexOf(index) >= 0) return;
        const img = new Image();
        let list = [...preloaded];
        img.src = shots[index].images.hidpi;
        list.push(index);
        setPreloaded(list);
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
                            <img
                                onMouseEnter={preloadImg}
                                onClick={openModal}
                                data-index={index}
                                src={item.images.normal}
                                alt={item.title}
                            />
                        </li>
                    );
                })}
            </Gallery>
            {modalIndex >= 0 ? (
                <Modal>
                    <div>
                        <span
                            onClick={(e) => {
                                setModalIndex(-1);
                            }}
                        >
                            &times;
                        </span>
                        <div>
                            <div className="header">
                                <User>
                                    <Avatar src={avatarSrc} alt="avatar" />
                                    {userName}
                                </User>
                            </div>
                            <img src={shots[modalIndex].images.hidpi} alt={shots[modalIndex].title} />
                            <div>{parse(shots[modalIndex].description || '')}</div>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </HomeWrap>
    );
};
export default Home;
