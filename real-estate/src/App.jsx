
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login.jsx'
import Lead from './Lead/Lead'
import Contact from './Contact/Contact.jsx'
import Meeting from './Meetings/Meeting.jsx'
import RequireAuth from './private/RequireAuth'
// import ABC from './ABC'
// icons
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


function App() {

  return (
    <>

      <ul>

        <li>
          <Link to='/' >Login <HomeIcon/></Link>
        </li>

        <li>
        <Link to='/lead' >Lead <LeaderboardIcon/></Link>
          
        </li>
        <li>
        <Link to='/Contact' >Contact <PermContactCalendarIcon/></Link>
          
        </li>
        <li>
        <Link to='/Meeting' >Meeting <PermContactCalendarIcon/></Link>
          
        </li>

      </ul>
      <Routes>
      <Route path='/' element={<Login/>}/>
   
        <Route path='/lead' element={ <RequireAuth> <Lead/></RequireAuth>} />

        <Route path='/Contact' element={ <RequireAuth> <Contact/></RequireAuth>} />

        <Route path='/Meeting' element={ <RequireAuth> <Meeting/></RequireAuth>} />


      </Routes>
    </>
  )
}

export default App
