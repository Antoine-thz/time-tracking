import '../styles/Container.scss'
import { useState } from 'react'
import Card from './Card.jsx'
import Profile from './Profile.jsx'
import data  from "../../data.json";


function Container() {

  const [period, updatePeriod] = useState("weekly")
  return (
    <>
      <div className='container'>
        <Profile period={period} updatePeriod={updatePeriod}/>
        {data.map(element =>(
            <Card key={element.title} title={element.title} timeframes={element.timeframes} period={period} updatePeriod={updatePeriod}/>
        ))}

      </div>
      
    </>
  )
}

export default Container
