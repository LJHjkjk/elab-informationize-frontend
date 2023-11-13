import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

export function Avatar(props){
  return(
    <Image src={props.url} width="50" height="50" roundedCircle></Image>
  )
}