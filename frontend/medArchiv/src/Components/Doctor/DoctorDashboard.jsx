import React, { useState } from "react"
import {Layout } from 'antd'; 
import Logo from './Logo'
import MenuList from "./MenuList";
import ToggleThemeButton from "./ToggleThemeButton";

const{Header, Sider } = Layout;
function DoctorDashboard() {
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme= () => {
    setDarkTheme(!darkTheme);
  }
  return (
    <Layout>
      <Sider theme ={darkTheme ? 'dark' : 'light'}  className= "sidebar">
        <Logo/>
        <MenuList darkTheme = {darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme}
        toggleTheme={toggleTheme}/>
        </Sider>
        <Layout></Layout>
      </Layout>
    
  )
}

export default DoctorDashboard
