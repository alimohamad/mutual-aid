const Header = ({ org }) => {
    return (
        <div>
            <h1>{org.name}</h1>
            <h2>{org.body}</h2>
        </div>
    )
}

export default Header