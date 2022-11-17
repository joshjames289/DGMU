import React, {useState} from 'react';
import axios from 'axios';


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
        <div className='container'>
            <h1>Create Member</h1>
            <form>
                <div>
                    <input onChange={handleChange} name='username' value={input.username} autoComplete='off' placeholder='Username'></input>
                </div>
                <input onChange={handleChange} name='gender' value={input.gender} autoComplete='off' placeholder='gender (optional)'></input>
                <input onChange={handleChange} name='skill_level' value={input.skill_level} autoComplete='off' placeholder='Skill level (optional)'></input>
                <input onChange={handleChange} name='willing_to_bet' value={input.willing_to_bet} autoComplete='off' placeholder='yes or no'></input>
                <input onChange={handleChange} name='pdga_number' value={input.pdga_number} autoComplete='off' placeholder='PDGA number (optional)'></input>
                <button onClick={handleClick}>ADD MEMBER</button>
            </form>
        </div>
    )
}

export default CreateMember;