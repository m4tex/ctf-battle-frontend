import Button from "../UI/Button";


function SignupPage() {
    function handleSignup() {
        console.log('Signing up :>')
    }

    return (
        <div className={'card'}>
            <h2>Where the Battle begins.</h2>
            <Button onClick={() => handleSignup()}>Sign Up</Button>
        </div>
    )
}

export default SignupPage;