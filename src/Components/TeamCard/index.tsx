import React from 'react';
import PlayerCard from '../../Components/PlayerCard';


import './styles.css';

function TeamCard(props: any) {
    return (
        <div className="container">
            <h2 className="teamName">{props.team}</h2>
        <div className="team">
          <div className="players">
        <PlayerCard
        name={props.name[0]}
        image={props.image[0]}/>
        <PlayerCard
        name={props.name[1]}
        image={props.image[1]}/>
       <PlayerCard
        name={props.name[2]}
        image={props.image[2]}/>
        <PlayerCard
        name={props.name[3]}
        image={props.image[3]}/>
        <PlayerCard
        name={props.name[4]}
        image={props.image[4]}/>
        
        </div>
      </div>
      </div>
    );
  }
  
  export default TeamCard;