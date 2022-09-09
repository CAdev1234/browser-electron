import React, { useEffect, useState } from 'react';
import { Storage_Key } from '../../../data/constant';
import storage, { StorageType } from '../../../utils/storage';
import {Button, Input} from '../common';
import {InputType} from '../common/inputs';

export interface WebBrowserHeaderProps {
    url: string;
    onUpdateUrl: (url: string) => void;
}
const WebBrowserHeader:React.FC<WebBrowserHeaderProps> = ({
    url,
    onUpdateUrl
}) => {
    const [isDisableBack, setIsDisableBack] = useState(true);
    const [isDisableForward, setIsDisableForward] = useState(true);
    const backHandler = () => {
        const forwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.forward_link) || [];
        const backwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.backward_link) || [];
        if (backwardLinks.length === 0) {
            onUpdateUrl('')
            return;
        }else {
            forwardLinks.push(backwardLinks[backwardLinks.length - 1]);
            backwardLinks.pop();
            onUpdateUrl(backwardLinks[backwardLinks.length - 1]);
            storage.rcSetItem(StorageType.local, Storage_Key.forward_link, [...new Set(forwardLinks)]);
            storage.rcSetItem(StorageType.local, Storage_Key.backward_link, [...new Set(backwardLinks)]);
        }
    };
    const forwardHandler = () => {
        const forwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.forward_link) || [];
        const backwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.backward_link) || [];
        if (forwardLinks.length === 0) {
            return;
        }else {
            backwardLinks.push(forwardLinks[forwardLinks.length - 1]);
            onUpdateUrl(forwardLinks[forwardLinks.length - 1]);
            forwardLinks.pop();
            storage.rcSetItem(StorageType.local, Storage_Key.forward_link, [...new Set(forwardLinks)]);
            storage.rcSetItem(StorageType.local, Storage_Key.backward_link, [...new Set(backwardLinks)]);
        }
        
    };
    const reloadHandler = () => {
        const webview = document.querySelector('#browser-content webview') as any;
        if (webview) webview.reload();
    }
    useEffect(() => {
        const forwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.forward_link) || [];
        const backwardLinks: Array<string> = storage.rcGetItem(StorageType.local, Storage_Key.backward_link) || [];
        if (backwardLinks.length > 0) setIsDisableBack(false);
        else setIsDisableBack(true);
        if (forwardLinks.length > 0) setIsDisableForward(false);
        else setIsDisableForward(true);
    }, [url])
    return (
        <>
            <div className="browser-header">
                <span className="actions">
                    <Button
                        iconName="ArrowLeft"
                        disabled={isDisableBack}
                        onClick={() => {
                            backHandler();
                        }}
                    />
                    <Button
                        iconName="ArrowRight"
                        disabled={isDisableForward}
                        onClick={() => {
                            forwardHandler();
                        }}
                    />
                    <Button
                        iconName="Reload"
                        onClick={() => {
                            reloadHandler();
                        }}
                    />
                </span>
                <Input
                    type={InputType.Url}
                    defaultVal={url}
                    prefixIcon="Search"
                    placeholder='Please type url'
                    onUpdate={onUpdateUrl}
                />
            </div>
        </>
    );
};

export default WebBrowserHeader;
