import {FormattedIcon} from '../../icons';
import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './sidebar.scss';
export interface SidebarItemProps {
    label: string;
    path?: string;
    icon?: string;
    nodes?: Array<SidebarItemProps> | null;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    path,
    icon,
    nodes,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    if (nodes) {
        return (
            <div className={isOpen ? 'sidebar-item open' : 'sidebar-item'}>
                <div
                    className="sidebar-title"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span>
                        {icon && <FormattedIcon name={icon} />}
                        {label}
                    </span>
                    <i className="bi-chevron-down toggle-btn"></i>
                </div>
                <div className="sidebar-content">
                    {nodes.map((child, idx) => (
                        <SidebarItem
                            key={idx}
                            label={child.label}
                            path={child.path}
                            icon={child.icon}
                            nodes={child.nodes}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <button
                className={`sidebar-item plain ${
                    location.pathname === path ? 'active' : ''
                }`}
                onClick={() => {
                    handleNavigate(path || '#');
                }}>
                {icon && <FormattedIcon name={icon} />}
                {label}
            </button>
        );
    }
};

export default SidebarItem;
