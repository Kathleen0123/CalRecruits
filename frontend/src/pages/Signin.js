import { useState, useEffect } from "react"
import axios from "axios"

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [usersData, setUsersData] = useState([])

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])

    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/users')
        .then(res => {
            if (processing) {
                setUsersData(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    const axiosPostData = async() => {
        const postData = {
            email: email
        }

        await axios.post('http://localhost:4000/signin/send', postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError(<p className="required">Email/Password is empty. Please enter a valid Email/Password.</p>)
        } else {
            let found = false
            for (let i = 0; i < usersData.length; i++) {
                if (usersData[i]["email"] === email) {
                    if (usersData[i]["password"] === password) {
                        setError('')
                        axiosPostData()
                        found = true
                        break
                    }
                }
            }
            if (!found) {
                setError(<p>Invalid Email/Password.</p>)
            }
        }
    }

    return (
        <>
            <h1>Sign In</h1>

            <form className="form">
                <label>Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <br />
                <a href="/signup">Do not have an account? Click here to sign up!</a>

                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Signin