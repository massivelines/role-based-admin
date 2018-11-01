import * as React from 'react';

export interface DisplayHeaderDataProps {
  active: boolean;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const DisplayHeaderData: React.SFC<DisplayHeaderDataProps> = props => {
  // console.log(props);

  return (
    <React.Fragment>
      <div className="picture-container">
        {/* if user is pending use P, if no picture use first and last initials, else use picture */}
        {props.active == false ? (
          <div className="picture-text">P</div>
        ) : props.picture == null ? (
          <div className="picture-text">
            {props.firstName[0]}
            {props.lastName[0]}
          </div>
        ) : (
          <img className="picture" src={props.picture} />
        )}
      </div>
      <div className="details">
        <div className="name h4">
          {props.firstName} {props.lastName}
        </div>
        <div className="email">{props.email}</div>
        {/* QUESTION: extension??? */}
        <div className="phone-number-container">
          <div className="phone-number">{props.phone}</div>
          {/* <div className="phone-number-ext">ext: 1234</div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayHeaderData;
