import React from "react";
import { useParams } from "react-router";

function BookDetails() {
  const { title,  } = useParams();
  return (
    <div>
      <h1>Title:{title}</h1>
    </div>
  );
}

export default BookDetails;
