import React, {useState} from 'react'
import {Lable, Well, BigInput} from './style/styledcomponents'


const RegistrationForm = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [zipcode, setZipcode] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        const body = JSON.stringify({username: email, email: email, firstname: firstname, lastname: lastname})
        console.log(body)
        try {
            fetch('http://api.bandjoin.com/users.cfc?method=adduser', {
                method: 'POST',
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    username: email, 
                    email: email,
                    zipcode: zipcode
                  })
            })
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Well>
        <form className="form-vertical well">
            <div>
                <Lable htmlFor="user-firstname">First Name</Lable>
                <BigInput className="form-control" maxLength="50" name="firstname" required={true} type="text" value={firstname} onChange={e => setFirstname(e.target.value)}/>
            </div>
            <div>
                <Lable htmlFor="user-lastname">Last Name</Lable>
                <BigInput className="form-control" maxLength="50" name="lastname" required={true} type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
            </div>
            <div>
                <Lable htmlFor="user-email">Email</Lable>
                <BigInput className="form-control" maxLength="100" name="email" required={true} type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <Lable htmlFor="user-zippostalcode">Zip/Postal Code</Lable>
                <BigInput className="form-control" maxLength="5" name="zipcode" required={true} type="text" value={zipcode} onChange={e => setZipcode(e.target.value)} />
                <br /><br />
                (No birth date necessary!)
                <br /><br />
                <input className="btn btn-success btn-lg" style={{fontSize:"2.6rem"}} type="submit" value="I'm Curious!" onClick={handleForm} /> 
            </div>
            <br /><br />
            Questions? Please feel free to <a href="mailto:questions@bandjoin.com">email us</a>. Anytime.
            <br />
            <br />
            ©2020 BandJoin.com - Home of the <strong>Musician Compatibility Engine</strong>™
        </form>
        </Well>
    )
}


export default RegistrationForm