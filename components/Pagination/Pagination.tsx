import React, { useState } from 'react'
import styles from './Pagination.module.css'

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }: any) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        setCurrentPage((page) => Math.min( page + 1, 3));
      }
  
      function goToPreviousPage() {
        setCurrentPage((page) => (Math.max( page - 1, 1))); 
      }
  
      function changePage(event: any) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
      }
  
      const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
      };
  
      const getPaginationGroup = () => {
        let start = Math.floor((Math.max(currentPage - 1, 1)) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(null).map((_, idx) => start + idx + 1);
      };
  
      return (
        <div className={styles.pagicont}>
      
          {/* show the posts, 10 posts at a time */}
          <div className={styles.container}>
            {getPaginatedData().map((d: any, idx: any) => (
              <RenderComponent key={idx} data={d} />
            ))}
                <div className={styles.pagination}>
                {/* previous button */}
                <button
                  onClick={goToPreviousPage}
                  className={styles.prev}
                >
                  prev
                </button>
          
                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                  <button
                    key={index}
                    onClick={changePage}
                    className={styles.paginationItem}
                  >
                    <span>{item}</span>
                  </button>
                ))}
          
                {/* next button */}
                <button
                  onClick={goToNextPage}
                  className={styles.next}
                >
                  next
                </button>
              </div>
          </div>
      
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          
        </div>
      );
  }


    