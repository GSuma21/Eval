import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
 

// const button = styled.nav`
// display: flex;
// flex-direction:column;
// flex-gap: 20px;
// background: black;
// border : 1px solid white
// color: white
// `

var asp = styled.button`
    color : ${({color}) => color};
    border : ${({border}) => border} ;
    background : ${({background}) => background};
    padding : 100px;
    margin : 30px 10px;
    font-size : 20px;
    cursor : pointer;
    `

function Navbar(){
    return(
    <div>
      <Link to="/">  HOME </Link>
       <Link to="/login"> Login </Link> 
       <Link to="/register"> Register </Link> 
      <Link to="/employee"> Employees </Link>
     
    </div>
    )
}

export {Navbar} 