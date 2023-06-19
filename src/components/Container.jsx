import '../styles/Container.scss'
import Card from './Card.jsx'
import Profile from './Profile.jsx'
import data  from "../../data.json";


function Container() {
  return (
    <>
      <div className='container'>
        <Profile />
        {data.map(element =>(
            <Card key={element.title} title={element.title} timeframes={element.timeframes}/>
        ))}

      </div>
      
    </>
  )
}

export default Container
