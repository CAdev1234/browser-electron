import React, { useEffect, useState } from 'react';
import { isUrl, shortenUrl } from '../../../utils/common';
import {
    Input,
    Loading
} from '../common';
import { InputType } from '../common/inputs';

export interface WebBrowserContentProps {
    url: string,
    links: Array<string>;
    onUpdateUrl: (url: string) => void;
}
const WebBrowserContent: React.FC<WebBrowserContentProps> = ({
    url,
    links,
    onUpdateUrl,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const loadStart = () => {
        setIsLoading(true);
        console.log("load start");
    }
    const loadStop = () => {
        setIsLoading(false);
        console.log("load stop");
    }
    const visitLink = (link: string) => {
        onUpdateUrl(link);
    }
    
    useEffect(() => {
        const webview = document.querySelector('webview')
        if (webview) {
            webview.addEventListener('did-start-loading', loadStart)
            webview.addEventListener('did-stop-loading', loadStop)
        }
    }, [url])
    return (
        <div id='browser-content'>
            {isLoading && isUrl(url) ? <Loading /> : <></>}
            {isUrl(url) ? 
                <webview id='webview' src={url} partition="persist:view"></webview>
                :
                <div className='history-part'>
                    <h1>Sample Browser</h1>
                    <Input type={InputType.Url} prefixIcon="Search" onUpdate={visitLink} />
                    <div className='history-items'>
                        {links.map((link, idx) => {
                            return (
                                <div key={`history_${idx}`}>
                                    <button onClick={() => {visitLink(link)}}></button>
                                    <h3 className='textellipsis_2'>{shortenUrl(link)}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    );
};

export default WebBrowserContent;
