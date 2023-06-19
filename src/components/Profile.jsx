import '../styles/Profile.scss'



function Profile({title, timeframes}) {
  return (
    <>
      <div className='profile'>
        <div className='profile__top'>
          <div className='profile__top__img'></div>
          <p className='profile__top__report'>Report for</p>
          <p className='profile__top__name'>Antoine Thenoz</p>
        </div>
        <div className='profile__bottom'>
          <div><p>Daily</p></div>
          <div><p>Weekly</p></div>
          <div><p>Monthly</p></div>
        </div>
      </div>
    </>
  )
}

export default Profile