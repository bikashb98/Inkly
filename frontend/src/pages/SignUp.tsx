
import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"

export function SignUp() {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div><Auth Heading="Create an account" SubHeading="Already have an account?"/></div>
                <div className="invisible md:visible"><Quotes/></div>
            </div>
        </div>
    )
}