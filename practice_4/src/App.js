import Search  from "./components/search";
import React, { Component } from 'react';

class App extends Component {

  state = {
    searchTerm: ''
  }

  queryImages = () => {
    const url = `https://pixabay.com/api/?key=31158012-d3611f656bf0e158ea7290830&q=${this.state.searchTerm}`
    console.log(url)
  }

  dataSearch = (data) => {
    this.setState({searchTerm: data}, ()=>{
      this.queryImages();
    })
    console.log(data)
  }

  render() {
    return (
    <div className="app container">
      <div className="jumbotron" style={{backgroundColor: '#e9ecef1c'}}>
        <p className="lead text-center">Buscardor de Imagenes</p>
        <Search dataSearch={this.dataSearch} />
      </div>
    </div>
    );
  }
}

export default App;

