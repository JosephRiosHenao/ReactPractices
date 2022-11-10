import Search  from "./components/search";
import Result from "./components/results";
import React, { Component } from 'react';

class App extends Component {

  state = {
    searchTerm: '',
    images : [],
    page: 1,
  }

  queryImages = () => {
    const url = `https://pixabay.com/api/?key=31158012-d3611f656bf0e158ea7290830&q=${this.state.searchTerm}&per_page=15&lang=es&page=${this.state.page}`
    fetch(url)
      .then( res => res.json() )
      .then(  res => this.setState({images: res.hits}) )
  }

  pageSet = (page) => {
    this.setState({page: page}, ()=>{
      this.queryImages();
    })
  }

  dataSearch = (data) => {
    this.setState({searchTerm: data, page: 1}, ()=>{
      this.queryImages();
    })
  }

  render() {
    return (
    <div className="app container">
      <div className="jumbotron" style={{backgroundColor: '#e9ecef1c'}}>
        <p className="lead text-center">Buscardor de Imagenes</p>
        <Search dataSearch={this.dataSearch} />
      </div>

      <Result images={this.state.images} setPage={this.pageSet} page={this.state.page} />
    </div>
    );
  }
}

export default App;

