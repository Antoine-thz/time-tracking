import '../styles/Card.scss'



function Card({title, timeframes}) {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='card'>
        <div className='card__icone'></div>
        <div className='card__infos'>
          <div className='top'>
            <p className='top__title'>{title}</p>
            <span className="material-symbols-outlined">more_horiz</span>
          </div>
          <p className='time'>{timeframes.weekly.current}</p>
          <p className='past'>Last week - 36hrs</p>

        </div>
      </div>
    </>
  )
}

export default Card