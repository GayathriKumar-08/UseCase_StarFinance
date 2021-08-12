import React, { useState, useEffect } from 'react'
import Tableform from './Tableform';

export default function GoldLoanapi() {

    const [dat,setDat]=useState({
        res:""
    })
    const [gold, setGold] = useState({});
    
    const [data, setData] = useState([]);
    const apiUrl = "https://data-asg.goldprice.org/dbXRates/INR";

    useEffect(() => {
        console.log("Hello this use effect... ");

        fetch(apiUrl).then(res => res.json()).then(data => {
            console.log(data);
            setData(data);
        }).catch(e => {
            console.error("ERR in student data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
            // props(onUserAdd);
          
    }, [])

    const  handleOnClick= () => {
       
       setGold(goldRate());
   
        setDat((prev)=>
        {
            return{
                ...prev,
                res:prev.res
            }
        })   
        setDat(dat);
   }
    const goldRate=()=>
    {
        console.log(data);
        let result = data.items[0].xauPrice / 31.10;
        result = Math.round(result);
        console.log(result);
       return result;
    }

    return (
        <div>
            <button onClick={handleOnClick}>Gold Rate Today</button>
          <h3>Today's gold rate:</h3>
          {/* {goldRate()} */}
         {/* <h4>{goldRate()}</h4>  */}
        </div>
        
    )
}