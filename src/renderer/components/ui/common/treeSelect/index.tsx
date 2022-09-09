import React, { useEffect, useState } from 'react';
import { FormattedIcon } from '../../../icons';
import ClickOutside from '../clickOutside/clickOutside';
import './treeSelect.scss';
import TreeSelectItem, { TreeSelectItemProps } from './treeSelectItem';

export interface TreeSelectProps {
    name: string,
    placeholder?: string;
    items?: Array<TreeSelectItemProps>;
    onChange?: (val: string) => void;
}
const TreeSelect:React.FC<TreeSelectProps> = ({
    name,
    placeholder = '',
    items,
}) => {
    const [tags, setTags] = useState([]);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const handleDropdown = (b: boolean) => {
        setActiveDropdown(b)
    }
    const selectHandler = (id: string, item: TreeSelectItemProps) => {
        setTags((prev) => [...prev, item])
        document.getElementById(id).setAttribute('disabled', '');
    }
    const removeTag = (idx: number) => {
        let tagsClone = JSON.parse(JSON.stringify(tags));
        document.getElementById(`${name}_${tagsClone[idx].value}`).removeAttribute('disabled');
        tagsClone.splice(idx, 1);
        setTags(tagsClone); 
    }
    useEffect(() => {
        if (activeDropdown) {
            tags.forEach((tag) => {
                document.getElementById(`${name}_${tag.value}`).setAttribute('disabled', '');
            })
        }
    },[activeDropdown])
    return (
        <>
            <ClickOutside
                active={activeDropdown}
                onClick={() => {handleDropdown(false)}}
            >
                <div className='treeselect'>
                    <div className='treeselect-input' onClick={() => {handleDropdown(true)}}>
                        {/* <input
                            type="text"
                            placeholder={tags.length > 0 ? '' : placeholder}
                            onFocus={() => {handleDropdown(true)}}
                        /> */}
                        {tags.length === 0 && <i>{placeholder}</i>}
                        <span className='treeselect-tags'>
                            {tags.map((tag, idx) => {
                                return (
                                    <div key={`${tag.value}_${idx}`} className="textellipsis_1">{tag.label}
                                        <button onClick={() => {removeTag(idx)}}>
                                            <FormattedIcon name='Close' />
                                        </button>
                                    </div>
                                )
                            })}
                        </span>
                    </div>
                    
                    <div className={`treeselect-dropdown ${activeDropdown ? '' : 'invisible'}`}>
                        {items.map((item, idx) => {
                            return (
                                <TreeSelectItem
                                    key={`${name}_${item.value}_${idx}`}
                                    label={item.label}
                                    value={item.value}
                                    name={name}
                                    nodes={item.nodes}
                                    onSelect={selectHandler}
                                />
                            )
                        })}
                    </div>
                </div>
            </ClickOutside>
        </>
    );
};

export default TreeSelect;
