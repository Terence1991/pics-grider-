import React from 'react'

const ImageList = (props) => {
 const imageList = props.images.map((image) => {
   return <img alt='cars' key={image.id} src={image.urls.regular}/>

 })

  return <div> {imageList} </div>

}


export default ImageList