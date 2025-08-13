
import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"

export function SignUp() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div><Auth Heading="Create an account" SubHeading="Already have an account?" Type = "Sign Up" linkTo = "/signin" linkText = "Login"/></div>
                <div className="hidden lg:block"><Quotes/></div>
            </div>
        </div>
    )
}