import { NavLink, useNavigate, Outlet } from "react-router-dom";
//navlink allows us to style the active link
const ProfilesPage = () => {
  const navigate = useNavigate()
  const profiles = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      <h1 className="text-4xl text-yellow-300">Projects</h1>
      <div className="">
      <ul className="flex flex-col gap-3">
        {profiles.map(profile => (
          <NavLink  key={profile} to={`/profiles/${profile}`} className={({ isActive }) => {
            return isActive ? 'text-red-500' : '';
          }} >Profile{profile}</NavLink>))}
      </ul>

      <Outlet/>
      <button onClick={() => {navigate('/')}}>Go back Home</button>
      </div>
    </div>
  )
}

export default ProfilesPage;

//think of <Outlet/> as placeholder for all the children routes  in a parent route
/*
. We need to tell the root route where we want it to render its child routes. 
We do that with <Outlet>.
 */