// CardDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ data }) => {
  const { id } = useParams();
  const card = data.find((item) => item.id.toString() === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h2>{card.name}</h2>
      {/* Display other card details here */}
    </div>
  );
};

export default CardDetails;
