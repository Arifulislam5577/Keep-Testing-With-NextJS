"use client";
import { useState } from "react";
import { Pagination } from "keep-react-demo";

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      prevNextShape="none"
      showGoToPaginate={true}
    />
  );
};

export default PaginationComponent;
