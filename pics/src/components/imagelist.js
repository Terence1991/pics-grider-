import React from 'react'

const ImageList = (props) => {
 const imageList = props.images.map((cars, id, urls ) => {
   return <img alt={cars} key={id} src={urls.regular}/>

 })

  return <div> {imageList} </div>

}


export default ImageList