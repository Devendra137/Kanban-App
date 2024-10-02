import React from "react";

import "../CssFiles/List.css";
import Card from "../Card/Card";

import BacklogIcon from "../../icons/Backlog.svg";
import TodoIcon from "../../icons/To-do.svg";
import InProgressIcon from "../../icons/in-progress.svg";
import DoneIcon from "../../icons/Done.svg";
import CancelledIcon from "../../icons/Cancelled.svg";
import NoPriority from "../../icons/No-priority.svg";
import Priority1Icon from "../../icons/Img - Low Priority.svg";
import Priority2Icon from "../../icons/Img - Medium Priority.svg";
import Priority3Icon from "../../icons/Img - High Priority.svg";
import Priority4Icon from "../../icons/SVG - Urgent Priority colour.svg";
import Add from "../../icons/add.svg";
import Dots from "../../icons/3 dot menu.svg";

let cardCount = 0;

export default function List(props) {
  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="list-icon">
                            <img
                              src={BacklogIcon}
                              alt="Backlog Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Todo: (
                          <div className="list-icon">
                            <img
                              src={TodoIcon}
                              alt="Todo Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        "In progress": (
                          <div className="list-icon">
                            <img
                              src={InProgressIcon}
                              alt="Inprogess Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Done: (
                          <div className="list-icon">
                            <img
                              src={DoneIcon}
                              alt="Done Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Cancelled: (
                          <div className="list-icon">
                            <img
                              src={CancelledIcon}
                              alt="CancelledIcon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="card-tag-icon">
                            <img
                              src={NoPriority}
                              alt="No Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        1: (
                          <div className="card-tag-icon">
                            <img
                              src={Priority1Icon}
                              alt="1 Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        2: (
                          <div className="card-tag-icon">
                            <img
                              src={Priority2Icon}
                              alt="2 Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        3: (
                          <div className="card-tag-icon">
                            <img
                              src={Priority3Icon}
                              alt="3 Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        4: (
                          <div className="card-tag-icon">
                            <img
                              src={Priority4Icon}
                              alt="4 Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <img src={Add} alt="add list item" width="22" height="22" />
            </div>
            <div className="list-option-item">
              <img src={Dots} alt="add dots" width="22" height="22" />
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}
