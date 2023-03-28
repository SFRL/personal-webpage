import React from "react";
import "../style/all.scss";

const Publication = (props) => {

    return (
      <div className="row bottom-margin">
        <div className="col-2">
          <span className="tag">{props.type}</span>
        </div>
        <div className="col">
          <p>
            <b>{props.title}</b>
            <br />
            {props.authors.slice(0, -1).join(", ") +
              " and " +
              props.authors.slice(-1)}
            <br />
            <i>In {props.in}</i> &mdash; {props.date}
          </p>
          <ul className="actions">
            <li>
              <a
                className="button"
                href={props.asset}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </li>
            <li>
              <a
                className="button"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official publication
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Publication;