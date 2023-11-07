import React from 'react';
import './InfoContainer.css'

const InfoContainer = (props) => {
  return (
    <div className="info-container">
      <div className="info-header">
        <div className="header-cell">{props.InfoHeader}</div>
        <div className="header-cell">{props.ProjectName}</div>
        <div className="header-cell">{props.Budget}</div>
        <div className="header-cell">{props.Status}</div>
      </div>
      <div className="info-row">
        <div className="row-cell">
          <input type="checkbox" checked={props.SelectionCheckbox} readOnly />
        </div>
        <div className="row-cell">{props.InfoRow}</div>
        <div className="row-cell">{props.ProjectName}</div>
        <div className="row-cell">{props.Budget}</div>
        <div className="row-cell">{props.Status}</div>
      </div>
    </div>
  );
};

export default InfoContainer;