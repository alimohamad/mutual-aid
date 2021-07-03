import { useState } from 'react'

import Header from './Header'
import Amount from './Amount'
import PayPal from './PayPal'

const CauseForm = ({ org }) => {
    
    const [cause, setCause] = useState("")
    const [amount, setAmount] = useState("")

    const Cause = ({title, amount, blurb}) => {
        
        return (
            <div className={cause === title ? "selected-cause" : ""} onClick={() => setCause(title)}>
                <h1>{title}</h1>
                <h2>{amount}</h2>
                <p>{blurb}</p>
            </div>
        )
    }

    getCauses = () => {
        return org.causes.map(c, i => <Cause key={i} title={c.title} amount={c.amount} blurb={c.blurb} />)
    }

    amountHandler = (e) => {
        e.preventDefault()
        setAmount(parseFloat(e.target.amount.value).toString())
    }
    
    return (
        <div>

            <Header org={org} />

            {getCauses()}

            <Amount amountHandler={amountHandler} />

            <PayPal account={org.account} amount={amount} cause={org.cause}/>
        </div>
    )
}

export default CauseForm