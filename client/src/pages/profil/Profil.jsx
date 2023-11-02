import React from 'react'

const Profil = () => {
  return (
    <div className='sidebar_wrapper'>
      <div className="sidebar_nav">

      </div>
      <div className="sidebar_links">
        <ul>
          <li><a href=""><img width="48" height="48" src="https://img.icons8.com/emoji/48/man-light-skin-tone.png" alt="man-curly-hair-light-skin-tone"/> Profil</a></li>
          {/* <li><a href=""><img width="48" height="48" src="https://img.icons8.com/emoji/48/woman-light-skin-tone.png" alt="man-curly-hair-light-skin-tone"/> Profil</a></li> */}
          {/* <img width="48" height="48" src="https://img.icons8.com/emoji/48/man-student.png" alt="man-student"/> */}
          <li><a href=""><img width="100" height="100" src="https://img.icons8.com/clouds/100/imessage.png" alt="imessage"/> Chat</a></li>
          <li><a href="">  Reyting</a></li>
          <li><a href=""> Kurslar</a></li>
          <li><a href=""> Baza V1.0</a></li>
          <li><a href=""> Do'kon</a></li>
          <li><a href=""> Ish izlash</a></li>
          <li><a href=""> Sun'iy intelekt yordami</a></li>
        </ul>
      </div>
      <div className="sidebar_logOut"></div>
    </div>
  )
}

export default Profil
