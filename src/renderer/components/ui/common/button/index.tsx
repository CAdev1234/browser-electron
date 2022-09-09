import React from 'react';
import './button.scss';
import {FormattedIcon} from '../../../icons';
export interface ButtonProps {
    iconName: string;
    disabled?: boolean;
    onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({
    iconName, 
    disabled = false, 
    children, 
    onClick
}) => {
    return (
        <>
            <button
                className={`btn ${iconName ? 'icon-btn' : 'txt-btn'}`}
                disabled={disabled}
                onClick={onClick}>
                {iconName ? <FormattedIcon name={iconName} /> : ''}
                {children}
            </button>
        </>
    );
};

export default Button;
