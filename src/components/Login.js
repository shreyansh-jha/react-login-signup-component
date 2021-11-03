const Login = () => {
    return (
        <div className="login-component">
            <h1 className="heading">Login Your Account</h1>
            <form action="" className="login-forum">
                <div id="user-email2">
                    <label htmlFor="input" className="label">Your Email</label>
                    <input type="text" className="input"/>
                </div>
                <div id="user-password2">
                    <label htmlFor="input" className="label">Your Password</label>
                    <input type="password" className="input"/>
                </div>
                <button>Log In</button>
            </form>
            <p className="enquiry">Dont't Have Account? <a href="">Signup Now</a></p>
        </div>
    );
}

export default Login;