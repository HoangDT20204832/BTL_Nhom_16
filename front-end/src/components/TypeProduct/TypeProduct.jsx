import React from 'react'
import { WrapperImg,WrapperProduct } from './styles'
import {useNavigate} from "react-router-dom"
const TypeProduct = ({name}) => {

const handleTypeImg = () =>{
  switch (name) {
    case "TV":
      return "https://sudospaces.com/viomivietnam-vn/2022/05/tivi-xiaomi-mi-tv-p1-55-inch-hang-xuat-eu-chinh-hang-gia-re-nhat-1-large.jpg"
    case "Điện thoại":
      return "https://cdn.tgdd.vn/Products/Images/42/303833/iphone-15-pro-blue-thumbnew-600x600.jpg"
    case "Ipad":
      return "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"
    default:
      return  "https://cdn.tgdd.vn/Products/Images/42/303833/iphone-15-pro-blue-thumbnew-600x600.jpg"
  }
}
const imgType = handleTypeImg()
console.log("imgType", imgType)
const navigate = useNavigate()

const handleNavigateType = (typeProduct) =>{
  navigate(`/product/${typeProduct.normalize('NFD').replace(/[\u0300-\u036F]/g,'')?.replace(/ /g,'_')}`, {state: typeProduct}) //giúp bỏ dấu và chuyển dấu cách bằng dấu _
}
  return (
    <WrapperProduct onClick={() => handleNavigateType(name)}>
      <WrapperImg src={imgType}></WrapperImg>
      <div>{name}</div>
    </WrapperProduct>
  )
}

export default TypeProduct