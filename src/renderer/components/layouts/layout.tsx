import React from 'react';
import Sidebar from './sidebar/sidebar';
import {Sidebar_Data} from '../../data/constant';
const Layout: React.FC = ({children}) => {
    return (
        <div className="wrapper">
            <Sidebar items={Sidebar_Data} />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
