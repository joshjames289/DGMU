import React, {useState} from 'react';
import axios from 'axios';
import './CreateMember.css';


function CreateMember() {
    const [input, setInput] = useState({
        username: '',
        gender: '',
        skill_level: '',
        willing_to_bet: '',
        pdga_number: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newUser = {
            username: input.username,
            gender: input.gender,
            skill_level: input.skill_level,
            willing_to_bet: input.willing_to_bet,
            pdga_number: input.pdga_number
        }
        
        axios.post('http://localhost:3000/create', newUser)
    }

    return (
        <div className='create-container'>
            <h1 className='create-title'>Create Member</h1>
            <form>
                <div className='user-container'>
                    <p>Disc Golfer: </p>
                    <input onChange={handleChange} name='username' value={input.username} autoComplete='off' placeholder='username'></input>
                </div>
                <div className='gender-container'>
                    <p>Gender: </p>
                    <input onChange={handleChange} name='gender' value={input.gender} autoComplete='off' placeholder='optional'></input>
                </div>
                <div className='skill-container'>
                    <p>Skill Level: </p>
                    <input onChange={handleChange} name='skill_level' value={input.skill_level} autoComplete='off' placeholder='1-10 (optional)'></input>
                </div>
                <div className='bet-container'>
                    <p>Willing To Bet?: </p>
                    <input onChange={handleChange} name='willing_to_bet' value={input.willing_to_bet} autoComplete='off' placeholder='yes or no'></input>
                </div>
                <div className='pdga-container'>
                    <p>PDGA Number: </p>
                    <input onChange={handleChange} name='pdga_number' value={input.pdga_number} autoComplete='off' placeholder='optional'></input>
                </div>
                <button onClick={handleClick}>ADD MEMBER</button>
            </form>
        </div>
    )
}

export default CreateMember;