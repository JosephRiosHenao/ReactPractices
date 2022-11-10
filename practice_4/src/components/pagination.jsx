import React, { Component } from 'react';

class Pagination extends Component {

    state = {
        setPage: this.props.setPage
    }

    next = () => {
        this.set(this.props.page+1)
    }
    previous = () => {
        this.set(this.props.page-1)
    }
    set = (page) => {
        this.state.setPage(page)
    }
    generatePages = () => {
        let buttons = []
        for (let i = this.props.page; i<this.props.page+5; i++){
            buttons.push(i)
        }
        return(
            <>
                { buttons.map(button => (
                    <li key={button} className="page-item"><button className="page-link" onClick={()=>this.set(button)}>{button}</button></li>
                ))}
            </>
        )
    }
    

    render() {
        return (
            <>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" onClick={this.previous}>Previous</a>
                        </li>
                            { this.generatePages() }
                        <li className="page-item">
                            <a className="page-link" onClick={this.next}>Next</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Pagination;
