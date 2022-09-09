import {FormattedIcon} from '../../../icons';
import React, {useState} from 'react';
import './treeSelect.scss';
export interface TreeSelectItemProps {
    label: string;
    value: string;
    name?: string;
    nodes?: Array<TreeSelectItemProps> | null;
    onSelect?: (id: string, item: TreeSelectItemProps) => void;
}
const TreeSelectItem: React.FC<TreeSelectItemProps> = ({
    label,
    value,
    name,
    nodes,
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectPlain = (id: string, item: TreeSelectItemProps) => {
        onSelect(id, item)
    }
    if (nodes) {
        return (
            <div className={isOpen ? 'treeselect-item open' : 'treeselect-item'}>
                <div
                    className="treeselect-item-title"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span>
                        {isOpen ? <FormattedIcon name='TriangleDown' /> : <FormattedIcon name='TriangleRight' />}
                        {label}
                    </span>
                </div>
                <div className="treeselect-item-content">
                    {nodes.map((child, idx) => (
                        <TreeSelectItem
                            key={`${child.label}_${idx}`}
                            label={child.label}
                            value={child.value}
                            name={name}
                            nodes={child.nodes}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <button
                id={`${name}_${value}`}
                className={`treeselect-item plain`}
                onClick={() => {selectPlain(`${name}_${value}`, {label: label, value: value})}}
            >
                {label}
            </button>
        );
    }
};

export default TreeSelectItem;
