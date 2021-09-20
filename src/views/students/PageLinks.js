import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PageLinks = ({ hasNextPage, hasPreviousPage,  toPrevious, toNext }) => {

  const start = <PaginationItem>
    <PaginationLink previous onClick={() => toPrevious()} >
    </PaginationLink>    
  </PaginationItem>
  
  const end = <PaginationItem>
    <PaginationLink  next={hasNextPage} last={hasNextPage === false} onClick={() => toNext()} >
    </PaginationLink>    
  </PaginationItem>

  return (
    <Pagination size="md" aria-label="navigation">
       { start}
       { end }
    </Pagination>
  );
}

export default PageLinks;