import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { SigninInput } from "@bikashb13/inkly-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface SignInProps{
    Heading: string;
    SubHeading: string;
    Type: "Sign Up" | "Sign In";
    linkTo: string;
    linkText?: string;

}

type InputBoxProps = {
    placeholder: string;
    label: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export function SignIn({
        Heading = 'Sign In',
        SubHeading = 'Don\'t have an account?',
        Type = 'Sign In',
        linkTo = '/signup',
        linkText = 'Sign Up'

 }: Partial<SignInProps>) {  

        const navigate = useNavigate();

           const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    })


      async function sendRequest() {
            try{ 
           const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs )
           const jwt = response.data.token;
           sessionStorage.setItem('token', jwt);
           navigate('/blogs');
            } catch(e){
                alert('Invalid Credentials')
            }
        }
    


    return (
       
        <div className="flex  h-screen justify-center my-30 py-25 bg-slate-50">
            <div className="flex flex-col items-start justify-center px-10 shadow-xl  "> 
                <div className=" text-4xl font-headland font-extrabold text-blue-950 ">
                    {Heading}
                </div>
                <div className="text-slate-500 font-medium mt-2 text-xl">
                   <span> {SubHeading}</span>
                   <span> <Link className=" underline hover:text-slate-600 mx-1" to={linkTo}> {linkText}</Link></span>
                </div>
                <div className="mt-10 flex-col  w-full ">

                   
                   <InputBox placeholder="Enter your email" label="Email" onChange={e => (setPostInputs(inputs => ({...inputs, email: e.target.value}))) } />
                   <InputBox  placeholder="Enter your password" label="Password" type = "password" onChange={e =>(setPostInputs(inputs => ({...inputs, password: e.target.value})))}/>

                    <div className=" mt-6 bg-slate-800 hover:bg-slate-950 rounded-md"><button onClick ={sendRequest} className = 'text-slate-50 font-bold h-10 w-full text-center'>{Type}</button></div>
                </div>
                
            </div>
        </div>
    )
}

function InputBox({placeholder, label, onChange, type}: InputBoxProps){
    return(
        <div>
            <div className="font-bold  mt-4">{label}</div>
             <div><input onChange ={onChange} type={type || "text"} placeholder={placeholder} className="outline-none focus:ring-slate-500 focus:border-slate-500 focus:border-2  px-3 border border-slate-400 rounded-md mt-2 w-full h-10"></input></div>
        </div>
    )
}
