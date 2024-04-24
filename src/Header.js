import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { ImMobile2 } from "react-icons/im";
import { SiRimacautomobili } from "react-icons/si";
import { LiaBimobject } from "react-icons/lia";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { useLocation } from "react-router";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="header_container">
      <div>
        <p>TravelMedia.in</p>
      </div>
      <div className="menu_container">
        <IoIosHome color={pathname === "/" ? "#f05a22" : "#c59584"} />
        <ImMobile2 color="#c59584" />
        <SiRimacautomobili
          color={pathname === "/item/1" ? "#f05a22" : "#c59584"}
        />
        <BiFoodMenu color="#c59584" />
        <LiaBimobject color="#c59584" />
        <MdOutlineMenuBook color="#c59584" />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
