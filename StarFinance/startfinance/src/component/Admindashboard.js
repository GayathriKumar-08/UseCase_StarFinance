import React from 'react';
//import { Link } from 'react-router-dom';
import './Login.css';
import Navadmin from './Navadmin';

export default function Admindashboard() {
    return (
        <div>
           <Navadmin/>
           <div>
               <img src="/loanimg.jpg" className="loanimg"/>
           </div>
        </div>
    )
}
