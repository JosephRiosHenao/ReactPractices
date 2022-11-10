import React, { Component } from 'react'
import Image from './image';
import Pagination from './pagination';

class Result extends Component {
    showImages = () => {
        const {images, page, setPage} = this.props;
        if (images.length === 0) return null;
        return(
            <>
                <div className="col-12 p-5 row">
                    { images.map(img => (
                        <Image 
                            key={img.id}
                            image={img}
                        />
                    ) ) }
                </div>
                <Pagination page={page} setPage={setPage}/>
            </>
        )
    }
    
    render() { 
        return (
            <>
                { this.showImages() }
            </>
        );
    }
}

export default Result;