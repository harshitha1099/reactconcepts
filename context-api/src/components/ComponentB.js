import React from 'react'
import ComponentC from './ComponentC'

function ComponentB(props) {
    console.log('ComponentB',props);
    return (
        <div>
            <ComponentC uname={props.uname} />
            
        </div>
    );
}

export default ComponentB;
