import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <ul className='nav-bar'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About Us</Link>
      </li>
      <li>
        <Link to="profiles">Profile</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
    </ul>
    </>
  )
}

export default Navbar