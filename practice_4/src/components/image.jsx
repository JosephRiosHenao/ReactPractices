import React from 'react';

const Image = (props) => {

    const { previewURL, largeImageURL, likes, tags, views } = props.image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={ previewURL } alt={ tags } className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{ likes } Me gusta </p>
                    <p className="card-text">{ views } Vistas </p>
                    <div className="row">
                        <div className="col-md-12">
                            <a href={largeImageURL} target="_blank" className='btn btn-primary btn-block'>Ver imagen</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;