import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
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