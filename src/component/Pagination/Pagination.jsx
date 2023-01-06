import React from "react";
import "./Pagination.css";
const Pagination = ({
  paginate,
  setCurrentPage,
  totalPost,
  currentPage,
  postPerPage,
}) => {
  const nuumber_of_page = [];
  for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
    nuumber_of_page.push(i);
  }

  const next = () => (
    currentPage <= nuumber_of_page.length ? paginate(currentPage++) : setCurrentPage(1)
 )

 const prev = () => (
    currentPage < 1 ? setCurrentPage(1) : paginate(currentPage--)
 )

  return (
    <div className="list-group">
      <button
        disabled={currentPage === 1 ? true : false}
        tabIndex="0"
        onClick={prev}
      >
        prev
      </button>

      {nuumber_of_page.map((number) => (
        <li className="list-link" onClick={() => paginate(number)}>
          <a href="#" >
            {number}
          </a>
        </li>
      ))}

      <button
        tabIndex="0"
        disabled={currentPage === nuumber_of_page.length ? true : false}
        onClick={next}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
