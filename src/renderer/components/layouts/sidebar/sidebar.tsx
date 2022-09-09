import React from 'react';
import SidebarItem, {SidebarItemProps} from './sidebarItem';
export interface SidebarProps {
    items: Array<SidebarItemProps>;
}
const Sidebar: React.FC<SidebarProps> = ({items}) => {
    return (
        <div className="sidebar">
            {items.map((item, index) => (
                <SidebarItem
                    key={index}
                    label={item.label}
                    path={item.path}
                    icon={item.icon}
                    nodes={item.nodes}
                />
            ))}
        </div>
    );
};
export default Sidebar;
