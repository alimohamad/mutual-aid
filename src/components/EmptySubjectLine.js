import Header from './Header'
import Amount  from './Amount'
import PayPal from './PayPal'

const EmptySubjectLine = ({ org }) => {
    const [amount, setAmount] = useState("")

    amountHandler = (e) => {
        e.preventDefault()
        setAmount(parseInt(e.target.amount.value))
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