import React, { useState, useEffect } from 'react'

import EmptySubjectLine from './EmptySubjectLine'
import CauseForm from "./CauseForm"

const FormType = ({ match }) => {
    const [org, setOrg] = useState({})
    useEffect(() => {
        // match.params.org => get org name, pass to Firebase query, set org.

        setOrg({
            name: match.params.org,
            format: "ESL",
            account: "thematchfund@gmail.com",
            body: " The fight against police brutality and the militarization of law enforcement in the United States is happening as we speak. Some of us can't protest, but we can donate—through The Match Fund, your contribution to any organization of your choosing can be doubled through donation matching programs at tech companies by employees who are passionate about seeing the change we're fighting for. You send us a donation and your donation is gifted to one of our volunteers, who match your gift through their employee donation matching program to work around donation matching programs. After your donation, you'll be sent a confirmation of your matched donation. Note that we match donations in batches, so confirmation will not be immediate.",
            causes: [
                {
                    title: "P",
                    amount: 300.00,
                    blurb: "help P with rent"
                },
                {
                    title: "A",
                    amount: 100.00,
                    blurb: "help A with groceries"
                },
            ]
        })
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