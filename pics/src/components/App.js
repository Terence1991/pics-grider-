import React from 'react'
import SearchBar from './SearchBar.js'
import unsplash from '../api/unsplash.js'
import ImageList from "./imagelist.js"


class App extends  React.Component {
   state = { images: []}
   onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });
    this.setState({images: response.data.results})
  }
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList imageList={this.state.images}/>
      </div>
    )
  } 
}

export default App;
