import Image from 'react-bootstrap/Image'

function Avatar({src,size=36}){
  return(
    <Image src={src} width={size} height={size} roundedCircle/>
  )
}

function Icon({icon,size=50}){
  return (
    <Image src={icon} width={size} height={size} roundedCircle/>
  )
}

function Photograph({url,width=171,height=180}){
  return (
    <Image src={url} width={width} height={height} thumbnail/>
  )
}

export {Avatar,Icon,Photograph}