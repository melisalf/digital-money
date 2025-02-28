type PaginationProps = {
    totalItems: number, 
    itemsPerPage: number,
    currentPage: number, 
    onPageChange: () => void;
}



const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange } : PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    return (
      <div className="flex justify-center gap-4 mt-5">
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </button>
        <span className="px-4 py-2">{currentPage} de {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    );
  };
  
  export default Pagination;
  