import React from 'react';
import './header.scss';
import {Button} from '../../ui/common';
const Header = () => {
    const handleHelp = () => {
        console.log('Handle help called');
    };
    const handleNoti = () => {
        console.log('Handle noti called');
    };
    return (
        <>
            <header>
                <div className="header-logo">
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        width={28}
                        height={28}
                        alt="logo"
                    />
                    <h1>Ant Design Pro</h1>
                </div>
                <div className="header-options">
                    <Button
                        iconName="Help"
                        onClick={() => {
                            handleHelp();
                        }}></Button>
                    <Button
                        iconName="Notification"
                        onClick={() => {
                            handleNoti();
                        }}></Button>
                </div>
            </header>
        </>
    );
};

export default Header;
