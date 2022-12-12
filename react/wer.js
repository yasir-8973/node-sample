
    import React, {useState,useEffect} from 'react';

    export default function wer() {
    
           const [wer, setwer] = useState("")

    return (

        <div>

       <input type='text' value={wer} onChange={(e) => setwer(e.target.value)} placeholder="Enter the wer" />

        </div>  
    );
}
