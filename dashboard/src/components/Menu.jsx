import React from "react";
import { useState } from "react";

import {Link} from "react-router-dom"

const Menu = () => {
  const[selectedMenu,setselectedmenu]=useState(0);
  const[isprofileDropdownOpen,setisProfileDropdownOpen]=useState(false);

  const handleMenuClick=(index)=>{
    setselectedmenu(index);
  }

  const handleprofileClick=(isprofileDropdownOpen)=>{
    setisProfileDropdownOpen(!isprofileDropdownOpen);
  }

  const menuClass ="menu";
  const activemenuClass="menu Selected"
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
             <p className={selectedMenu===0? activemenuClass:menuClass}>Dashboard</p>
            </Link>
           
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
             <p className={selectedMenu===1? activemenuClass:menuClass}>Orders</p>
            </Link>
            
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
             <p className={selectedMenu===2? activemenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
             <p className={selectedMenu===3? activemenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===3? activemenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5? activemenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;