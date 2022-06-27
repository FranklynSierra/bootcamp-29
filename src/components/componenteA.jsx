import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { estado } from './js/estado';
import { Todo } from './js/class';
import ComponenteB from './componenteB';
  
const prev= new Todo(estado.disponible);
class ComponenteA extends Component {
 
    render() {
        return (
            <div>
            <h1>hola mi nombre es: {this.props.name}</h1>
            <h1>mi apellido es: {this.props.apellido}</h1>
            <h1>Mi Email es: {this.props.email}</h1>

           <ComponenteB></ComponenteB>
           
            </div>
        );
    }
}


ComponenteA.propTypes = {
    apellido:PropTypes.string,
    name:PropTypes.string,
    email:PropTypes.string,
    
};


export default ComponenteA;
