import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React,{useState} from 'react';

function Tempc(){
    const[tempc, setTempc]=useState(0);
    const[tempf, setTempf]=useState(0);
    const handleChangec=()=>{
        setTempc(tempc+1)
    }
    const handleChangef=()=>{
       tempf= setTempf(tempc+10)
    }
    return(
        <>
        <div>
        <input type='text' value={tempc} onChange={handleChangec}/>
        </div>
        <div>
            <input type='text' value={tempf} onChange={handleChangef}/>
        </div>
        
        </>

    )
}
    export default Tempc;

    

