import React, { useState, useEffect } from 'react'

import EmptySubjectLine from './EmptySubjectLine'
import CauseForm from './CauseForm'
import Firebase from './Firebase'

const FormType = ({ match }) => {
    const [org, setOrg] = useState({})
    useEffect(() => {
        // match.params.org => get org name, pass to Firebase query, set org.
        Firebase.firestore()
        .collection('funds')
        .where("referenceName", "==", match.params.org)
        .get()
        .then((snapshot) => {
            if(snapshot.docs.length === 1) {
                setOrg(snapshot.docs[0].data())
            }
        });  
    }, [])
    

    // TO-DO: ADD '404' PAGE AND EDIT return 
    if(org.format) {
        return org.format && org.format === "ESL" ? (<EmptySubjectLine org={org} />) : (<CauseForm org={org} />)

    }
    else {
        return <div>wait!!!!</div>
    }
}

export default FormType