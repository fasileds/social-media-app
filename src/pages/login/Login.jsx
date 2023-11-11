import "./login.css"

export default function Login() {
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
                    <input placeholder="password" type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginforgot">forgot Psword</span>
                    <button className="loginRegiserButton">create New Account</button>
                </div>
            </div>
        </div>
    </div>
    )
}
