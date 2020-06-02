import React from 'react'
import '../CompStyle/Paginate.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
        pageNumbers.push(i)


    return (
        <div class="paginateWrapper">
            <ul className="pagination">
                {(currentPage != 1 && currentPage != Math.ceil(totalPosts / postsPerPage)) ?
                    <li>

                        <a onClick={() => paginate(currentPage - 1)} href="#/">
                            <DoubleArrowIcon className="arrowBack" />
                        </a>
                        <span href="#/">{currentPage}</span>
                        <a onClick={() => paginate(currentPage + 1)} href="#/">
                            <DoubleArrowIcon className="arrowFwd" />
                        </a>

                    </li>
                    : currentPage != Math.ceil(totalPosts / postsPerPage) ?
                        <li>

                            <span href="#/">{currentPage}</span>
                            <a onClick={() => paginate(currentPage + 1)} href="#/">
                                <DoubleArrowIcon className="arrowFwd" />
                            </a>

                        </li> :

                        <li>

                            <a onClick={() => paginate(currentPage - 1)} href="#/">
                                <DoubleArrowIcon className="arrowBack" />
                            </a>
                            <span href="#/">{currentPage}</span>


                        </li>

                }
            </ul>
        </div>
    )
}

export default Pagination
