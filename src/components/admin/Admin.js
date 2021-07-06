import React, { useState, useEffect } from 'react'

import Firebase from '../Firebase'
import TextField from './TextField'

const Admin = ({ orgName }) => {
    const [org, setOrg] = useState({})
    const [id, setId] = useState("")

    useEffect(() => {
        // match.params.org => get org name, pass to Firebase query, set org.
        Firebase.firestore()
        .collection('funds')
        .where("name", "==", "test")
        .get()
        .then((snapshot) => {
            if(snapshot.docs.length === 1) {
                setId(snapshot.docs[0].id)
                setOrg(snapshot.docs[0].data())
            }
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        Firebase.firestore().collection("funds").doc(id).update(org);
    }

    const changeHandler = (key, value) => {
        const newOrg = {...org}
        newOrg[key] = value
        setOrg(newOrg)
    }

    console.log(org)
    return (
        <div>
            <form>
                <TextField changeHandler={changeHandler} title={"Reference Name"} field={"name"} currentVal={org.name} />
                <TextField changeHandler={changeHandler} title={"Display Name"} field={"displayName"} currentVal={org.displayName} />
                <TextField changeHandler={changeHandler} title={"Paypal Account"} field={"paypal"} currentVal={org.paypal} />
                <TextField changeHandler={changeHandler} title={"Body"} field={"body"} currentVal={org.body} />

                {/** CAUSES + FORMAT NEED OWN COMPONENT, FIGURE OUT PENDING CAUSES*/}

                <input type="button" onClick={submitHandler} defaultValue="Save Changes" />
            </form>
        </div>
    )
}

export default Admin