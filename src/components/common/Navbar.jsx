import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link,matchPath } from 'react-router-dom'
import { NavbarLinks } from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropdown from '../core/auth/ProfileDropdown'
import {IoIosArrowDropdownCircle} from "react-icons/io"
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'

const subLinks = [
  {
    title: "python",
    link:"/catalog/python"
},
{
  title: "web dev",
  link:"/catalog/web-development"
},

]


const Navbar = () => {
  console.log("Printing base url: ",process.env.REACT_APP_BASE_URL)
  const {token} = useSelector((state) => state.auth)
  const {user} = useSelector( (state) => state.profile );
  const {totalItems} = useSelector((state) => state.cart)

  const location = useLocation();

  const [ssubLinks, setSsubLinks] = useState([]);

  const fetchSublinks = async() => {
    try{
      const result =  await apiConnector("GET", categories.CATEGORIES_API)
      console.log("Printing Sublinks result:" , result);
      setSsubLinks(result.data.data);
    }
    catch(error) {
      console.log("Could not fetch the category list");
    }
  }

  useEffect( () => {
    console.log("PRINTING TOKEN", token);
    fetchSublinks();
  },[])





  const matchRoute = (route) => {
    return matchPath({path:route}, location.pathname);
  }


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
       {/* image     */}
      <Link to="/">
         <img src={logo} width={160} height={42} loading='lazy' alt=""/>
      </Link>

      {/* Nav Links */}
      <nav>
        <ul className='flex gap-x-6 text-richblack-25'>
        {

          NavbarLinks.map( (link, index) => (
            <li key={index}>
                {
                  link.title === "Catalog" ? (
                  <div className='relative flex items-center gap-2 group'>
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle/>

                    <div className='z-[1] invisible absolute left-[50%] 
                      translate-x-[-50%] translate-y-[35%] max-w-[200%] 
                     top-[5%]
                    flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                    opacity-0 transition-all duration-200 group-hover:visible
                    group-hover:opacity-100 lg:w-[300px]'>

                    <div className='absolute left-[50%] top-0
                    translate-x-[80%]
                    translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                    </div>

                    {
                    subLinks.length ? (
                    subLinks.map( (subLink, index) => (
                    <Link to={`${subLink.link}`} key={index}
                    className='hover:text-richblack-100 transition-all duration-300 py-2 border-b border-richblack-700 last:border-b-0'
                    >
                    <p className='bold'>{subLink.title}</p>
                    </Link>
                    ) )
                    ) : (<div></div>)
                    }

                   </div>
                  </div>
                  ) : (
                     <Link to={link?.path}>
                         <p className = {`${ matchRoute(link?.path) ? "text-yellow-25": 
                         "text-richblack-50"}`}>
                          {link.title}
                         </p>
                     </Link>
                  )
                }
            </li>
          ))

        }
  

        </ul>
      </nav>

      {/* Login/Signup/Dashboard */}
      <div className='flex gap-x-4 items-center'>

      {
        user && user.accountType !== "Instructor" && (
          <Link to="/dashboard/cart" className='relative'>
            <AiOutlineShoppingCart />
            {
              totalItems > 0 && (
                <span>
                  {totalItems}
                </span>
              )
            }
          </Link>
        )
      }
      {
        token === null && (
          <Link to="/login">
            <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
             Log In
            </button>
          </Link>
        )
      }
      {
        token === null && (
          <Link to = "/signup">
            <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
              Sign Up
            </button>
          </Link>
        )
      }
      {
        token !== null && <ProfileDropdown/>
      }

      </div>
      




      </div>


    </div>
  )
}

export default Navbar