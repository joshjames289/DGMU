import React, {useEffect, useState} from 'react';
import './Community.css';


function Community() {
    const [community, setCommunity] = useState([{
        username: '',
        gender: '',
        skill_level: '',
        willing_to_bet: '',
        pdga_number: ''
    }])

    useEffect(() => {
        fetch('http://localhost:3000/community')
        .then(res => {
            console.log(res)
            if(res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => {
            console.log(jsonRes)
            setCommunity(jsonRes)
        })
    },[]);

    return (
        <div className='community-container'>
            <h1 className='dgmu-members'>DGMU Members</h1>
            {community.map(user => {
                return (
                <div className='member-container'>
                    <div className='info-container'>
                        <h2>{user.username}</h2>
                    </div>
                    <div className='info-container'>                        
                        <p className='info-title'>Gender: </p>
                        <p>{user.gender}</p>
                    </div>
                    <div className='info-container'>                        
                        <p className='info-title'>Skill Level (1-10): </p>
                        <p>{user.skill_level}</p>
                    </div>
                    <div className='info-container'>                        
                        <p className='info-title'>Willing to Bet: </p>
                        <p>{user.willing_to_bet}</p>
                    </div>
                    <div className='info-container'>                        
                        <p className='info-title'>PDGA Number: </p>
                        <p>{user.pdga_number}</p>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Community;