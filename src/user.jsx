export default function User({user}){
    const {name, email,username } = user
    return(
        <div className="users">
            <h3>Name: {name}</h3>
            <p>username: {username}</p>
            <p>Email: {email}</p>
            
            
        </div>
    )
}