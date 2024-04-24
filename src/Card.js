import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, description, id }) => {
  const [showMore, setShowMore] = useState(false);

  // Function to toggle show more/less
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="dscr_box">
          <p className="card-description">
            {showMore ? (
              <>
                <span>{description}</span>
                <span onClick={toggleShowMore} className="read-more-button">
                  {showMore ? "Read Less" : "Read More..."}
                </span>
              </>
            ) : (
              <>
                <span>{description?.slice(0, 50)}</span>
                <span onClick={toggleShowMore} className="read-more-button">
                  {showMore ? "Read Less" : "Read More..."}
                </span>
              </>
            )}
          </p>
          <div>
            <Link to={`/item/${id}`}>
              <BiSend size={30} color="#f05a22" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
