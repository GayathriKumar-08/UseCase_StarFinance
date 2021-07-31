import React,{useState,useEffect} from 'react'
import Navadmin from './Navadmin';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Kycproof.css'
export default function Customerproof() {
    const [check, setCheck] = useState([]);
 
    const history = useHistory();

    useEffect(() => {
        console.log("Hello this use effect... ");
      


        fetch("http://localhost:8080/api/kycproof").then(res => res.json()).then(proof => {
            console.log(proof);
            setCheck(proof);
        }).catch(e => {
            console.error("ERR in proof data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, [])

    const handleEmail=()=>
    {
        history.push("/message");
    }
    
    const deleteKyc = async (pid) => {
        await axios.delete(`http://localhost:8080/api/kycproof/${pid}`);
        
        let ln = check.filter((data) => {
            setCheck({data});
             return data.pid !== check.pid;
           
        });
        console.log(ln);
        setCheck(ln);

        //    console.log(l);
        //    setLoandata(l);
    }
    return (
        <div>
            <Navadmin/>
            <div className="container">
                <div className="proofview">
                    <h3 className="aproof">Customer Proof Check</h3>
                        <table className="tname">
                            <thead className="thea">
                                <tr>
                                    <th  className="thh">ID</th>
                                    <th  className="thh">Proof</th>
                                    <th  className="thh">Proof-Number</th>
                                    <th  className="thh">Name of Applicant</th>
                                    <th  className="thh">Delete</th>
                                    <th  className="thh">Send Message</th>
                                </tr>
                            </thead>

                            {
                             check &&  check.map((x) => {
                                    return (
                                        <tbody className="tb">
                                            <tr>
                                               <td  className="tdd">{x.pid}</td>
                                               <td  className="tdd">{x.proof}</td>
                                               <td  className="tdd">{x.txt}</td>
                                               <td  className="tdd">{x.proofname}</td>
                                               <td  className="tdd"><button className="sendmsg"  onClick={() =>deleteKyc(x.pid)}>Delete</button></td>
                                               <td  className="tdd"><button className="sendmsg" onClick={handleEmail}>Send Message</button></td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                   </div>
            </div>
        </div>
    )
}
