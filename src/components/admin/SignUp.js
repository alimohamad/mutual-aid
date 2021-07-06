const SignUp = () => {

    const submitHandler = (e) => {
        e.preventDefault()

        const user = {
            username: e.target.email.value,
            password: e.target.password.value
        }

        const org = {
            name: e.target.name.value,
            displayName: e.target.displayName.value,
            body: e.target.body.value,
            paypal: e.target.paypal.value,
            format: e.target.format.value,
            causes: [],
            causePayments: []
        }

        // Post These To Firebase
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="text" name="orgName" placeholder="Organization Name" />
                <input type="text" name="name" placeholder="Subroute" />
                <input type="text" name="body" placeholder="Description" />
                <input type="text" name="paypal" placeholder="Paypal Account" />
                <input type="submt" />
            </form>
        </div>
    )
}