import React from 'react'

function Home() {

 return( <div>
            <h1>Recipe Book</h1>
        <table >
            <td>
                <br />
                <div >
                    <img src='https://www.dinneratthezoo.com/wp-content/uploads/2015/08/grilled-chicken-breast-5-500x500.jpg'></img>
                </div>
            </td>
            <td>
                <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cilantro-lime-chicken-horizontal-1526869172.jpg'></img>
            </td>
            <tbody>
                {
                    info.map((item, index) => {
                        return <tr >
                            <td key={index}>{item}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
 )
}