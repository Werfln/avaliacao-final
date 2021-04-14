import React, {Component} from 'react';
import { Patrocinadores } from './styled';
import google from '../imagens/google.png';
import amazon from '../imagens/amazon.png';
import ibm from '../imagens/ibm.png';
import vive from '../imagens/vive.png';
import mb from '../imagens/mb.png';

export default class patrocinadores extends Component {
    render(){
        return(
            <Patrocinadores>
                <img src={google} alt=""/>
                <img src={amazon} alt=""/>
                <img src={ibm} alt=""/>
                <img src={vive} alt=""/>
                <img src={mb} alt=""/>
            </Patrocinadores>
        )
    }
}