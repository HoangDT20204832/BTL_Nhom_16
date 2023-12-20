import React,{ Fragment, useEffect } from 'react'
import HeaderComponent from '../HeaderComp/index'
import FooterComp from '../FooterComp'


const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        {/* <NavbarAcountComp/> */}
        {children}
        <FooterComp />
    </div>
  )
}

export default DefaultComponent