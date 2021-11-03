const SignUp = () => {
    return (
        <div id="signup-component">
            <h1 className="heading">Sign Up New Account</h1>
            <form action="" className="signup-forum">
                <div id="user-name">
                    <label htmlFor="input" className= "label">Your Name</label>
                    <input type="text" className="input"/>
                </div>
                <div id="user-email">
                    <label htmlFor="input" className= "label">Your Email</label>
                    <input type="text" className="input"/>
                </div>
                <div id="user-password">
                    <label htmlFor="input" className= "label">Password</label>
                    <input type="password" className="input"/>
                </div>
                <input type="radio" className="radio-button"/>
                <label htmlFor="radio-button" className="label">I Agree with <span>Terms & Conditions</span></label>
                <button>Register Now</button>
            </form>
            <p className="enquiry">Already Have Account? <a href="">Login Now</a></p>
        </div>
    );
}

export default SignUp;