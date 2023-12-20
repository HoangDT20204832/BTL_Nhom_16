import React from 'react'
import HeaderComponent from '../HeaderComp/index'
import FooterComp from '../FooterComp'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponent/> 
        {children}
        <FooterComp />
    </div>
  )
}

export default DefaultComponent