import React,{useState} from 'react'
import Navadmin from './Navadmin';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
export default function Adminapproval() {
    const [msg,setMsg]=useState(
        {
            name:"",
            user_email:"",
            loanid:0,
            loantyp:" ",
            message:""

        }
    )
    const [data,setData]=useState([]);
    const handleOnChange=(e)=>
    {
       const {name,value}=e.target;
       setMsg((prev) => {
        return {
            ...prev,
            [name]: value
        }
    })
    console.log(msg);
    }
    const sendEmail=(e)=>
    {
        e.preventDefault();


        const reqOptios = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(msg)
        };

        fetch("http://localhost:8080/api/knnum", reqOptios).then(res => res.json()).then(data => {
            console.log("saved");
            alert("successfully submitted");
            console.log(data.id);
            setData(data.id);
        })
        

         emailjs.sendForm('service_vdk2nxj',
         'template_ai487te',
         e.target,
         'user_NQBBFF6W3GVLjdunRNzCc').then(res=>
            {
                console.log(res);
            }).catch(err=>console.log(err));

          
    }
    return (
        <div>
            <Navadmin/>
            <div className="mailbox">
            <div className="container">
                <h4 style={{marginLeft:'130px',Color:'#158fad'}}>KN Number generator</h4>  <br/>
                <form onSubmit={sendEmail}>
                <table>
                    <tr>
                        <td><label>Applicant Name</label></td>
                        <td> <input type="text" name="name" value={msg.name} className="mbox" onChange={handleOnChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td> <label>Applicant Email</label></td>
                        <td> <input  type="email" name="user_email" value={msg.user_email} className="mbox"onChange={handleOnChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label>Loan-Id</label></td>
                        <td> <input type="text" name="loanid" value={msg.loanid} className="mbox"onChange={handleOnChange}/></td>
                    </tr>  
                  <br/>
                  <tr>
                        <td><label>Loan-Type</label></td>
                        <td> <input type="text" name="loantyp" value={msg.loantyp} className="mbox"onChange={handleOnChange}/></td>
                    </tr>  
                  <br/>
                    <tr>
                        <td><label>Message</label></td>
                        <td> <textarea name="message" rows='4' value={msg.message} className="mbox"onChange={handleOnChange}/></td>
                    </tr>                                      
                    </table>
                  <input type="submit" value="send Mail" className="mbtn"/>
                  <br/>
                  <div className="linkmsg"><Link to='/aloanform'>Back</Link></div>
                </form>
            </div>
            </div>
        </div>
    )
}
