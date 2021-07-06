import React, { useState } from 'react'

import Header from './Header'
import Amount  from './Amount'
import PayPal from './PayPal'

const EmptySubjectLine = ({ org }) => {
    const [amount, setAmount] = useState("")

    const amountHandler = (e) => {
        e.preventDefault()
        setAmount(parseFloat(e.target.amount.value))
    }
    
    return (
        <div>
            <Header org={org} />
            <Amount amountHandler={amountHandler}/>
            <PayPal account={org.account} amount={amount} cause={"GENERAL"}/>
        </div>
    )
}

export default EmptySubjectLine