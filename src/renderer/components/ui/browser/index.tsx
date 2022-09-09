import React, { useEffect, useState } from 'react';
import { Max_History_Num, Storage_Key } from '../../../data/constant';
import { isUrl } from '../../../utils/common';
import storage, { StorageType } from '../../../utils/storage';
import './browser.scss';
import WebBrowserContent from './browserContent';
import WebBrowserHeader from './browserHeader';

export interface WebBrowserProp {
    url: string
}

const WebBrowser:React.FC<WebBrowserProp> = ({url}) => {
    const [urlData, setUrlData] = useState(url);
    const [histories, setHistories] = useState([]);

    const updateUrl = (str: string) => {
        setUrlData(str);
        let histories: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.history_link) || [];
        let backwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.backward_link) || [];
        let forwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.forward_link) || [];
        if (isUrl(str)) {
            // if (updatedHistories.length >= Max_History_Num) {
            //     updatedHistories.shift()
            // }
            // if(updatedHistories.length > 0) updatedHistories[updatedHistories.length - 1].isLatest = false;
            histories.push(str);
            if (forwardLinks.indexOf(str) === -1) backwardLinks.push(str);
            storage.rcSetItem(StorageType.local, Storage_Key.history_link, [...new Set(histories)]);
            storage.rcSetItem(StorageType.local, Storage_Key.backward_link, [...new Set(backwardLinks)]);
            setHistories([...new Set(histories)]);
        }
    }
    
    useEffect(() => {
        const links = storage.rcGetItem(StorageType.local, Storage_Key.history_link) || [];
        setHistories([...links]);
    }, [])
    return (
        <>
            <div className="web-browser">
                <WebBrowserHeader url={urlData} onUpdateUrl={updateUrl} />
                <WebBrowserContent url={urlData} onUpdateUrl={updateUrl} links={histories} />
            </div>
        </>
    );
};

export default WebBrowser;
