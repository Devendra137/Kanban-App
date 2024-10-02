import React from "react";
import "../CssFiles/Card.css";
// import xxx from "../../icons/No-Priority.svg";
import NoPriority from "../../icons/No-priority.svg";
import Priority1Icon from "../../icons/Img - Low Priority.svg";
import Priority2Icon from "../../icons/Img - Medium Priority.svg";
import Priority3Icon from "../../icons/Img - High Priority.svg";
import Priority4Icon from "../../icons/SVG - Urgent Priority colour.svg";

const PriorityIcons = {
  0: <img src={NoPriority} alt="0 Priority" width="22" height="22" />,
  1: <img src={Priority1Icon} alt="1 Priority" width="22" height="22" />,
  2: <img src={Priority2Icon} alt="2 Priority" width="22" height="22" />,
  3: <img src={Priority3Icon} alt="3 Priority" width="22" height="22" />,
  4: <img src={Priority4Icon} alt="4 Priority" width="22" height="22" />,
};

const getIcon = (priority) => PriorityIcons[priority];

const CardTag = ({ tag }) => (
  <div className="card-tag-box">
    <div className="card-tag-title">{tag}</div>
  </div>
);

const Card = (props) => {
  const { cardDetails } = props;

  return (
    <div className="card-container">
      <div className="card-id-wrapper">
        <div className="card-id">{cardDetails.id}</div>
        <div className="card-profile">
          <div className="card-profile-initial">
            {`${cardDetails.userObj.name[0]}${cardDetails.userObj.name[1]}`}
          </div>
          <div
            className={`card-profile-initial-available ${
              cardDetails.userObj.available
                ? "card-profile-initial-available-true"
                : ""
            }`}
          ></div>
        </div>
      </div>

      <div className="card-title">{cardDetails.title}</div>

      <div className="card-tag">
        {getIcon(cardDetails.priority)}

        {cardDetails.tag.map((tag) => (
          <CardTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Card;
