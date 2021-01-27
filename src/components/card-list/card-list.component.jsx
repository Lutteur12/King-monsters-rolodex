import React from 'react';

import { Card } from '../card/card.component';


import './card-list.styles.css';


// think about what should add or randering not how to creat them.

export const CardList = props =>{
    // console.log(props)
    return <div className='card-list'>
    {props.monsters.map(monster =>(
        <Card key={monster.id} monster={monster} />
        ))
      }
    
    </div>
} 