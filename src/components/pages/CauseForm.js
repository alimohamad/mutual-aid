import React, { useState } from 'react'

import Header from './Header'
import Amount from './Amount'
import PayPal from './PayPal'

const CauseForm = ({ org }) => {
    
    const [cause, setCause] = useState("")
    const [amount, setAmount] = useState("")

    const Cause = ({title, amount, blurb}) => {
        
        return (
            <div className={cause === title ? "selected-cause" : ""}>
                <h1>{title}</h1>
                <h2>{amount}</h2>
                <p>{blurb}</p>
                <button className={cause === title ? "hidden-select" : ""} onClick={() => setCause(title)}>Select</button>
            </div>
        )
    }

    const getCauses = () => {
        return org.causes.map((c, i) => <Cause key={i} title={c.title} amount={c.amount} blurb={c.blurb} />)
    }

    const amountHandler = (e) => {
        e.preventDefault()
        setAmount(parseFloat(e.target.amount.value).toString())
    }
    
    return (
        <div>

            <Header org={org} />

            {getCauses()}

            <Amount amountHandler={amountHandler} />

            <PayPal account={org.account} amount={amount} cause={cause}/>
        </div>
    )
}

export default CauseForm