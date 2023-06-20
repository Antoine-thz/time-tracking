import '../styles/Profile.scss'
import image from '../../images/image-jeremy.png'

function Profile({title, timeframes, period, updatePeriod}) {
  return (
    <>
      <div className='profile'>
        <div className='profile__top'>
          <div className='profile__top__img'><img src={image}/></div>
          <p className='profile__top__report'>Report for</p>
          <p className='profile__top__name'>Jeremy Robson</p>
        </div>
        <div className='profile__bottom'>
          <div onClick={() => updatePeriod('daily')}  className={period === 'daily' ? 'active' : ''}><p>Daily</p></div>
          <div onClick={() => updatePeriod('weekly')} className={period === 'weekly' ? 'active' : ''}><p>Weekly</p></div>
          <div onClick={() => updatePeriod('monthly')} className={period === 'monthly' ? 'active' : ''}><p>Monthly</p></div>
        </div>
      </div>
    </>
  )
}

export default Profile