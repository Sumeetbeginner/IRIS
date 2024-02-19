import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Counselling() {
    return (
        <div className='counselling-page'>
            <div className="name">
                <AccountCircleIcon sx={{fontSize:'30px', paddingRight:'5px'}}/>
                Anup Khor
            </div>
            <div className="chatbox">
                <div className="sender">
                    <div className="msg1">
                        abc
                    </div>

                </div>
                <div className="receiver">
                    <div className="msg2">
                        xyz
                    </div>
                </div>
            </div>
            <div className="textbox">
                <input type="Enter text" className="chatbot" />
                <button> <span class="material-symbols-outlined">send</span> 
            </button>
            </div>
            
        </div>
    )
}
