import React, {Component} from 'react';
import img from '../menu.jpg';
import { Principal } from './styled';


export default class painelprincipal extends Component {
    render(){
        return(
            <React.Fragment>
                <Principal>
                    <div>
                        <img src={img} alt=""/>
                        <div>
                            <p className="negrito">Programa Nanodegree</p>
                            <h2>Seja um Desenvolvedor React</h2>
                            <p>React está transformando completamente o desenvolvimento Front-End.</p>
                            <p>Domine essa poderosa ferramenta de UI do Facebook.</p> 
                            <button>INSCREVA-SE</button>
                        </div>
                    </div>
                </Principal>
            </React.Fragment>
        )
    }
}