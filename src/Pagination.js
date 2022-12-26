import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const { pages, nbPages, getPrevPage, getNextPage } = useGlobalContext();
    return <>
        <div className='pagination-btn'>
            <button onClick={() => getPrevPage()}>PREV</button>
            <p>
                {pages + 1} of {nbPages}
            </p>
            <button onClick={() => getNextPage()}>NEXT</button>
        </div>
    </>
}

export default Pagination