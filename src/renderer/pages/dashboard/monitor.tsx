import React from 'react';
import { Pagination, TreeSelect } from '../../components/ui/common';
import { TreeSelect_Data } from '../../data/constant';

const PageMonitor = () => {
    return (
        <>
            <TreeSelect
                name="sample"
                placeholder='Please select'
                items={TreeSelect_Data}
            />
            <br />
            <Pagination
                defaultCurrent={1}
                total={50}
            />
        </>
    );
};
export default PageMonitor;
