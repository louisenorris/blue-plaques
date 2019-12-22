import React from 'react';
import emptyPlaque from './emptyblue.png';

const Plaque = (props) => {

    return (
        <div className="card">
            {/* <div className="image"><img src={(props.plaque.thumbnail_url !== null) ? props.plaque.thumbnail_url : emptyPlaque } alt="plaque" width="200" height="200"/></div> */}
            {/* <div className="image"><img src={props.plaque.thumbnail_url} alt="plaque" width="200" height="200"/></div> */}
            <br/>
            <div className="content">
                <div className="header">{ props.plaque.subjects ? (props.plaque.subjects).split(' ').slice(0, 4).join(' ') : null}</div>
                <br/>
                <button onClick={() => props.handleClick(props.plaque.id)} className="button">Show details</button>
            </div>
        </div>
        
    );
};

export default Plaque;