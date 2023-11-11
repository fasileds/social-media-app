import "./register.css"

export default function Register() {
    return (
        <div className="login">
        <div className="loginWarper">
            <div className="loginLeft">
                <h3 className="loginlogo">fasil social</h3>
                <span className="loinDesc">connect with firends and the worlde arouned you on fasil socila </span>

            </div>
            <div className="loginRight">
                <div className="loinBox">
                    <input placeholder="Emaile" type="emaile" className="loginInput" />
                    <input placeholder="UserName" type="text" className="loginInput" />
                    <input placeholder="password" type="password" className="loginInput" />
                    <input placeholder="password Agin" type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegiserButton">Log in account</button>
                </div>
            </div>
        </div>
    </div>
    )
}
