import React,{useState} from 'react'
import colors from '../services/colors';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from "react-icons/ri";
import { IoStorefront, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";

const Sidebar = () => {

  const [selectedPage, setSelectedPage] = useState('Dashboard');

  const pages = [
    {icon: <RiDashboardFill size={20} /> , route:'/', title: 'Dashboard'},
    {icon: <IoStorefront size={20} /> , route:'/store', title: 'Store'},
    {icon: <IoChatbubbleEllipsesSharp size={20} /> , route:'/support', title: 'Support'},
    {icon: <FaShoppingCart size={20} /> , route:'/cart', title: 'Cart'},
    {icon: <FaUserTie size={20} /> , route:'/login', title: 'Login'}
  ]

  return (
    <div style={{height:'100vh', backgroundColor:colors.outer_space}}>
      <div className='avatar-container'>
        <img className='avatar' alt="avatar" src='https://res.cloudinary.com/united-app/image/upload/v1686929983/avatars/avatar2_detyjq.png' />
        <p className='pgreen'>Elihu Schitrit</p>
        <p className='pwhite'>CTO</p>
      </div>
      {
        pages.map((page,index) => (
          <Link onClick={() => {setSelectedPage(page.title)}} to={page.route} key={index} className={selectedPage === page.title ? 'pressed_link' : 'link'}>
            {page.icon} <span style={{marginLeft:12}}>{page.title}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar