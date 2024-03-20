import { useState } from "react"
import axios from "axios"

function AddClub() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [shortMsg, setShortMsg] = useState('')
    const [longMsg, setLongMsg] = useState('')
    const [deadline, setDeadline] = useState('')
    const [error, setError] = useState('')

    const axiosPostData = async() => {
        const postData = {
            email: email,
            name: name,
            shortMsg: shortMsg,
            longMsg: longMsg,
            deadline: deadline
        }

        await axios.post('http://localhost:4000/addclub/send', postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!shortMsg || !longMsg) {
            setError(<p className="required">Description is empty. Please enter a description.</p>)
        } else {
            setError('')
            axiosPostData()
        }
    }

    return (
        <>
            <h1>Add Your Student Organization</h1>

            <form className="form">
                <label>Contact Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Organization Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Short Description</label>
                <textarea id="shortMsg" name="shortMsg" value={shortMsg} onChange={(e) => setShortMsg(e.target.value)}></textarea>
                <label>Long Description</label>
                <textarea id="longMsg" name="longMsg" value={longMsg} onChange={(e) => setLongMsg(e.target.value)}></textarea>
                
                <label>Application Deadline</label>
                <input type="text" id="deadline" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default AddClub