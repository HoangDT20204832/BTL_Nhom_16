import React from 'react'
import { WrapperImg,WrapperProduct } from './styles'

const TypeProduct = ({name, img}) => {
  return (
    <WrapperProduct>
      <WrapperImg src={img}></WrapperImg>
      <div>{name}</div>
    </WrapperProduct>
  )
}

export default TypeProduct