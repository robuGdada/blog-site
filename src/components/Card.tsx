import React, { DOMAttributes } from "react";
import { Author } from "./Author";

interface CardProps extends DOMAttributes<HTMLDivElement> {
  image?: string;
  category?: string;
  title: string;
  authorName?: string;
  profilePic?: string;
  createdAt: string;
  onCardClick: () => void;
  onProfileClick: () => void;
}

function formatDateToCustomFormat(dateString: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}

function Card({
  category,
  authorName,
  createdAt,
  profilePic,
  title,
  image,
  onCardClick,
  onProfileClick,
  ...rest
}: CardProps) {
  return (
    <>
      <div className="m-post-card-grid" onClick={onCardClick}>
        <img src={"/rct.png"} />
        <div className="card-content">
          <div className="card-category">technology</div>
          <div className="card-title">{title}</div>
          <div className="card-author" onClick={onProfileClick}>
            <Author />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
