import React, {Component} from 'react';
import { Lateral } from './styled';
import img from '../imagens/md.jpg';
import gmi from '../imagens/py.jpg'
import mig from '../imagens/va.jpg'

export default class painellateral extends Component {
    render(){
        return(
            <React.Fragment>
                <Lateral>
                    <figure className="f1">
                        <img src={mig} alt=""/>
                        <label>
                            <p className="nc">Novo curso</p>
                            <h3>Voo autônomo</h3>
                            <p>Saba mais</p>
                        </label>
                    </figure>
                    
                    <figure className="f2">
                        <img src={img} alt=""/>
                        <label>
                            <p className="ia">Inscrições abertas</p>
                            <h3>Marketing Digital</h3>
                            <p>Em colaboração com Google e Facebook</p>
                        </label>
                    </figure>
                    
                    <figure className="f3">
                        <img src={gmi} alt=""/>
                        <label>
                            <p className="nc">Novo curso</p>
                            <h3>Fundamentos de Data Science</h3>
                            <p>Python para análise de dados</p>
                        </label>
                    </figure>
                </Lateral>
            </React.Fragment>
        )
    }
}