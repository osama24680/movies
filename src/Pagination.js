import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {pagination} from "react-bootstrap"
import axios from "axios"
function PaginationExample({currentPage,numberOfPages}) {

    const handlePageClick = async(e) => {
        let selectedItem=e.selected+1
        currentPage(selectedItem)
    }

    // let pageCount = resData.total_pages;
    let pageCount = numberOfPages;
    return (

        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            marginRangeDisplayed={3}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            style={{width:"20% !important"}}
        />  
    );
}

export default PaginationExample;