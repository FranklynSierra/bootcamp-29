
    
    import React from 'react'
    import PropTypes from 'prop-types'
    import { estado } from './js/estado'
    export function ComponenteB({todo}) {
      return (
        <div>
            <h5>{todo?' Contacto En Línea':'Contacto No Disponible'}</h5>
        </div>
      )
    }
    ComponenteB.propTypes = {
        estado:PropTypes.instanceOf(estado)
        
        };
        
    export default ComponenteB