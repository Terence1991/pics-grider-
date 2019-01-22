import React from 'react'
import './imageList.css'

const ImageList = (props) => {
 const imageList = props.images.map((cars, id, urls ) => {
   return <img alt={cars} key={id} src={urls.regular}/>

 })

  return <div className='image-list'> {imageList} </div>

}


export default ImageList