import React, { useState } from 'react';
import { FormattedIcon } from '../../../icons';
import './pagination.scss';

export interface PaginationProps {
    defaultCurrent: number;
    total: number;
    pageSize?: number;
}
const Pagination:React.FC<PaginationProps> = ({
    defaultCurrent,
    total,
    pageSize = 12
}) => {
    const [current, setCurrent] = useState(defaultCurrent);
    const updateCurrent = (num: number) => {
        setCurrent(num);
    }
    const nextPage = () => {
        setCurrent((prev) => prev + 1);
    }
    const prevPage = () => {
        setCurrent((prev) => prev - 1);
    }
    return(
        <>
            <div className='pagination'>
                <button disabled={current === 1} onClick={() => {prevPage()}}>
                    <FormattedIcon name='ChevronLeft' />
                </button>
                {[...Array(Math.ceil(total / pageSize)).keys()].map((item, idx) => {
                    return (
                        <button 
                            key={idx}
                            className={`${current === idx + 1 ? 'active' : ''}`}
                            onClick={() => {updateCurrent(idx + 1)}}
                        >{idx + 1}</button>
                    )
                })}
                <button onClick={() => {nextPage()}} disabled={current === Math.ceil(total / pageSize)}>
                    <FormattedIcon name='ChevronRight' />
                </button>
            </div>
        </>
    );
}

export default Pagination;