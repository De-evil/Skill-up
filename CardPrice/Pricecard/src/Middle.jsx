import React from 'react'
import './App.css';
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";



export default function Middle(){
    return (
    <div className="card">
        <div className="card-body">
            <h6 className='card-title header__category text-muted'> Plus</h6>
            <h2 className='card-subtitle'> $9/Month </h2>
            <hr />

            <div>
                <div className="mergeIcon">
                    <FaCheck  size="25px" color="green"/>
                    <p className='first_condition'>Single User</p>
                </div>
                <div className="mergeIcon">
                    <FaCheck size="25px" color="green"/>
                    <p className='first_condition'>50GB Storage</p>
                </div>
                <div className="mergeIcon">
                    <FaCheck size="25px" color="green"/>
                    <p className='first_condition'>Unlimited Public Projects</p>
                </div>
                <div className="mergeIcon">
                    <FaCheck size="25px" color="green"/>
                    <p className='first_condition'>Community Access</p>
                </div>
                <div className="mergeIcon">
                    <FaCheck size="25px" color="green"/>
                    <p className='first_condition'>Unlimited Private Projects</p>
                </div>
                <div className="mergeIcon">
                    <FaCheck size="25px" color="green"/>
                    <p className='first_condition'>Dedicated Phone Support </p>
                </div>
                <div className="mergeIcon">
                    <FaCheck size="25px" color="green"/>
                    <p className='first_condition'>Free Subdomain </p>
                </div>
                <div className="mergeIcon">
                    <FaXmark size="25px" color="red"/>
                    <p className='first_condition'>Monthly Status Reports </p>
                </div>
                <button>button</button>
            </div>
        </div>
    </div>
    )
}