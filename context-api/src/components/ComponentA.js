import React from 'react'
import ComponentB from './ComponentB';

function ComponentA(props) {
    console.log('ComponentA',props);
    return (
        <div>
            <ComponentB uname={props.uname} />
        </div>


    );
}
export default ComponentA;