import React, { Component } from 'react';


class Search extends Component {


    searchRef = React.createRef()

    handleData = (e) => {
        e.preventDefault();
        this.props.dataSearch(this.searchRef.current.value)
    }


    render() { 

        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" name="searchInput" id="searchInput"
                            className="form-control form-control-lg"
                            placeholder='Busca tu Imagen. Ejemplo: Futbol' />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" value="Buscar"
                            className="btn btn-lg btn-danger btn-block" />
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Search;