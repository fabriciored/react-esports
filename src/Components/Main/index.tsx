import React from 'react';
import './styles.css';

import Header from '../../Components/Header';
import TeamCard from '../../Components/TeamCard';

import { TeamInfos } from '../../Utils/TeamInfos'

function Main() {
    return (
      <div className="main">
          <Header/>
          <TeamCard
          team={TeamInfos[0].team}
          name={TeamInfos[0].names}
          image={TeamInfos[0].image}
           />
           <TeamCard
          team={TeamInfos[1].team}
          name={TeamInfos[1].names}
          image={TeamInfos[1].image}
           />
           <TeamCard
           team={TeamInfos[2].team}
           name={TeamInfos[2].names}
           image={TeamInfos[2].image}
           />
      </div>
    );
  }
  
  export default Main;