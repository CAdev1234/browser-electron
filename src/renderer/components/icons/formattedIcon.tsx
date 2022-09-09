import React from 'react';
import {
    IconArrowLeft,
    IconArrowRight,
    IconDashboard,
    IconException,
    IconExternal,
    IconForm,
    IconHelp,
    IconNotification,
    IconProfile,
    IconReload,
    IconSearch,
    IconClose,
    IconTriangleDown,
    IconTriangleRight,
    IconChevronRight,
    IconChevronLeft,
} from './index';
export interface FormattedIconProps {
    name: string;
}
const FormattedIcon: React.FC<FormattedIconProps> = ({name}) => {
    const format = (name: string) => {
        switch (name) {
            case 'Dashboard':
                return <IconDashboard />;
            case 'Profile':
                return <IconProfile />;
            case 'Form':
                return <IconForm />;
            case 'Exception':
                return <IconException />;
            case 'Help':
                return <IconHelp />;
            case 'Notification':
                return <IconNotification />;
            case 'Search':
                return <IconSearch />;
            case 'ArrowLeft':
                return <IconArrowLeft />;
            case 'ArrowRight':
                return <IconArrowRight />;
            case 'Reload':
                return <IconReload />;
            case 'TriangleRight':
                return <IconTriangleRight />;
            case 'TriangleDown':
                return <IconTriangleDown />;
            case 'ChevronRight':
                return <IconChevronRight />;
            case 'ChevronLeft':
                return <IconChevronLeft />;
            case 'Close':
                return <IconClose />;
            default:
                return <IconExternal />;
        }
    };
    return <>{format(name)}</>;
};

export default FormattedIcon;
