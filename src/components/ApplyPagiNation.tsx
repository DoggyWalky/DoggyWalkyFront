import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
    totalItems: number;
    itemCountPerPage: number;
    pageCount: number;
    currentPage: number;
}

export default function ApplyPagiNation({ totalItems, itemCountPerPage, pageCount, currentPage }: Props) {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const [start, setStart] = useState(1);
    const noPrev = start === 1;
    const noNext = start + pageCount - 1 >= totalPages;
  
    useEffect(() => {
      if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
      if (currentPage < start) setStart((prev) => prev - pageCount);
    }, [currentPage, pageCount, start]);
  
    return (
      <div className="flex flex-row justify-center items-center mt-30 text-gray-700 text-sm">
        <ul className="list-none flex">
          <li className="relative">
            <Link to={`?page=${start - 1}`} className="block w-20 text-center">이전</Link>
          </li>
          {[...Array(pageCount)].map((a, i) => (
            <>
              {start + i <= totalPages && (
                <li key={i} v-for="(a, i) in [...Array(pageCount)]">
                  <Link 
                    className="w-10 h-10 flex items-center justify-center hover:border-gray-400 border rounded-full transition-colors"
                    to={`?page=${start + i}`}>
                    {start + i}
                  </Link>
                </li>
              )}
            </>
          ))}
          <li className="relative">
            <Link to={`?page=${start + pageCount}`} className="block w-20 text-center">다음</Link>
          </li>
        </ul>
      </div>
    );
}