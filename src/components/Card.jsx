import '../styles/Card.scss'
import play from '../../images/icon-play.svg'
import work from '../../images/icon-work.svg'
import study from '../../images/icon-study.svg'
import social from '../../images/icon-social.svg'
import exercise from '../../images/icon-exercise.svg'
import selfcare from '../../images/icon-self-care.svg'


function Card({title, timeframes, period, updatePeriod}) {

  const colors= { work : "hsl(15, 100%, 70%)",
  play: "hsl(195, 74%, 62%)",
  study: "hsl(348, 100%, 68%)",
  exercise: "hsl(145, 58%, 55%)",
  social: "hsl(264, 64%, 52%)",
  selfcare: "hsl(43, 84%, 65%)"}

  const themes={play, work, study, social, exercise, selfcare}
  let divPeriod
  if(period==="daily") divPeriod= <><p className='time'>{timeframes.daily.current}hrs</p><p className='past'>Last day - {timeframes.daily.previous}hrs</p></>
  else if(period==="weekly") divPeriod= <><p className='time'>{timeframes.weekly.current}hrs</p><p className='past'>Last week - {timeframes.weekly.previous}hrs</p></>
  else if(period==="monthly") divPeriod= <><p className='time'>{timeframes.monthly.current}hrs</p><p className='past'>Last month - {timeframes.monthly.previous}hrs</p></>

  return (
    <>
      <div style={{ backgroundColor : colors[title.toLowerCase().replace(/\s/g, '')] }} className='card'>
        <div className='card__img'><img src={themes[title.toLowerCase().replace(/\s/g, '')]} alt={title}/></div>
        <div className='card__infos'>
          <div className='top'>
            <p className='top__title'>{title}</p>
            <span className="material-symbols-outlined">more_horiz</span>
          </div>
          {divPeriod}
        </div>
      </div>
    </>
  )
}

export default Card