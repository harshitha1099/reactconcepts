import React from 'react'
import { UserConsumer } from '../context/Context'

function ComponentC(props) {
    return (
        <div>
            <UserConsumer>
                {
                    (userData) => {
                        return (
                            <h2 style={{color:"blue"}}>Data From Context: {userData}</h2>
                        )
                    }
                }
            </UserConsumer>
            <h2 style={{color:"red"}}> Data from props drilling: {props.uname}</h2>

        </div>
    );
}

export default ComponentC;
