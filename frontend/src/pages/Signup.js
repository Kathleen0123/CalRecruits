import { useState } from "react"
import axios from "axios"

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [type, setType] = useState('')

    const axiosPostData = async() => {
        const postData = {
            name: name,
            email: email,
            password: password,
            type: type
        }

        await axios.post('http://localhost:4000/signup/send', postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError(<p className="required">Email/Password is empty. Please enter a valid email/password.</p>)
        } else {
            setError('')
            axiosPostData()
        }
    }

    return (
        <>
            <h1>Sign Up</h1>

            <form className="form">
                <label>Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <label>Are you registering as a Student or a Club?</label>
                <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="student">Student</option>
                <option value="club">Club</option>
                </select>

                <br /><br /><a href="/signin">Already have an account? Click here to sign in!</a>
                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Signup