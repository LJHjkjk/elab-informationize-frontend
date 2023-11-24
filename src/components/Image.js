import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

export function Avatar({src,size=36}){
  return(
    <Image src={src} width={size} height={size} roundedCircle/>
  )
}

export function Icon({icon,size=50}){
  return (
    <Image src={icon} width={size} height={size} roundedCircle/>
  )
}