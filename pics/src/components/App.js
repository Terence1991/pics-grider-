import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar.js'



class App extends  React.Component {
  async onSearchSubmit(term) {
    const response = await axios
    .get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: "Client-ID 32560efc027a42b1c7f18b48b46f71cfbffc2a01f2f7891fa6af2846d4aceeb2"
      }
    });
    console.log(response.data.results)
  }
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  } 
}

export default App;
