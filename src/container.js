import React from 'react';
import Tempc from './tempc.js';

function Container(){
    return(
        <div style={{width:500,backgroundColor:"darkgray"}}>
        <h1>Temperature Convertor</h1>
        <Tempc/>
        </div>
    )
}
export default Container;