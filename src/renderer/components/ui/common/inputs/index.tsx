import React, {useEffect, useState} from 'react';
import './input.scss';
import Button from '../button';
import {FormattedIcon, IconSearch} from '../../../icons';
import { addhttps } from '../../../../utils/common';
export enum InputType {
    Url = 'url',
    Text = 'text'
}
export interface InputProps {
    type: InputType;
    defaultVal?: string;
    placeholder?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    onUpdate?: (val: string) => void;
}
const Input:React.FC<InputProps> = ({
    type,
    defaultVal = '',
    placeholder = '',
    prefixIcon = '',
    suffixIcon = '',
    onUpdate
}) => {
    const [inputVal, setInputVal] = useState(defaultVal);
    const updateInput = (val: string) => {
        setInputVal(val)
    }
    const handleKeyboard = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case "Enter":
                if (type === InputType.Url) {
                    onUpdate(addhttps(inputVal))
                }
                return;
            default:
                break;
        }
    }
    useEffect(() => {
        setInputVal(defaultVal);
    }, [defaultVal])
    return (
        <div className="input">
            <div className="prefix-input">
                {prefixIcon && <span className="prefix-item">
                    <FormattedIcon name={prefixIcon} />
                </span>}
                <input 
                    type={type}
                    value={inputVal}
                    placeholder={placeholder}
                    onChange={(e) => updateInput(e.target.value)}
                    onKeyDown={(e) => {
                        handleKeyboard(e);
                    }}
                />
                {suffixIcon && <span className="suffix-item">
                    <FormattedIcon name={suffixIcon} />
                </span>}
            </div>
        </div>
    );
};

export default Input;
