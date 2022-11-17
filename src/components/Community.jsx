import React, {useEffect, useState} from 'react';


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
        <div className='container'>
            <h1>Community</h1>
            {community.map(user => {
                return (
                <div>
                    <h1>{user.username}</h1>
                    <p>{user.gender}</p>
                    <p>{user.skill_level}</p>
                    <p>{user.willing_to_bet}</p>
                    <p>{user.pdga_number}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Community;