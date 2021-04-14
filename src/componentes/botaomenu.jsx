import React, {Component} from 'react';

export default class menusuperior extends Component {
    render(){
        return(
            <React.Fragment>
                <button className="btn">Explore</button>
                <button className="btn">Nanodegree</button>
                <button className="btn">Catálogo</button>
                <button className="btn">Eventos</button>
                <button className="btn">Blog</button>
                <button className="btn">Ajuda</button>
            </React.Fragment>
        )
    }
}