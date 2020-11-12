import React from 'react';
import './styles.css';

function PlayerCard(props: any) {
    return (
      <div className="card">
          <img className="image" src={props.image} alt="Italian Trulli"></img>
          <div className="name"><h1 className="nameFont">{props.name}</h1></div>
      </div>
    );
  }
  
  export default PlayerCard;
  