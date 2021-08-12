import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import Tableform from './Tableform';
import UserNav from './UserNav';


export default function DashBoard() {
    return (
        <div>
            <div>
                <UserNav/>
                <div className="tableform">
                    <Tableform />
                </div>
            </div>
        </div>
    )
}
