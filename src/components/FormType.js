import { useState, useEffect } from './react'

import EmptySubjectLine from './EmptySubjectLine'
import CauseForm from "./CauseForm"

const FormType = ({ props }) => {
    const [org, setOrg] = useState({})

    useEffect(() => { /** Firebase Call to setOrg() Data from subroute (props.match.params.org) */ })

    // TO-DO: ADD '404' PAGE AND EDIT return 
    return org.format === "ESL" ? <EmptySubjectLine org={org} /> : <CauseForm org={org} />

}

export default FormType