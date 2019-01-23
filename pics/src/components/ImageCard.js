import React from 'react'


class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {span: 0}
    
    this.imageRef = React.createRef();
  }

  componentDidMount() {
   this.imageRef.current.addEventListener("load",this.setSpan)
  }

  setSpan = () => {
    const hieght = this.imageRef.current.clientHeight
    const spans = Math.ceil(hieght / 150 + 1)

    this.setState({spans: spans})
  }
  render() {
    const {description, urls} = this.props.image
    return (
    <div style={{gridRowEnd:`span ${this.state.spans}` }} >
      <img 
      ref={this.imageRef}
      alt={description} 
      src={urls.regular}
      />
    </div>
  )
  }

}

export default ImageCard