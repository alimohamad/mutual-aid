const Amount = ({ amountHandler }) => {
    return (
        <form onSubmit={amountHandler}>
            <input name="amount" type="text" placeholder="Please enter the amount you want to donate!" />
        </form>
    )
}

export default Amount