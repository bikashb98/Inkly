interface SignUpProps{
    Heading: string;
    SubHeading: string;
}


export function Auth({Heading, SubHeading}: SignUpProps){
    return(
        <div className="flex  h-screen justify-center">
            <div className="flex flex-col items-start justify-center px-10  "> 
                <div className=" text-4xl font-headland font-extrabold text-blue-950 ">
                    {Heading}
                </div>
                <div className="text-slate-500 font-medium mt-2 text-xl">
                   <span> {SubHeading}</span>
                   <span> <a href="#" className=" underline hover:text-slate-600 mx-1"> Login</a></span>
                </div>
                <div className="mt-10 flex-col  w-full ">
                    <div className="font-bold"> Username </div>
                    <div><input type="text" placeholder="Enter your username" className="px-3 border border-slate-400 rounded-md mt-2 w-full h-10"></input></div>

                    <div className="font-bold  mt-4">Email</div>
                    <div><input type="text" placeholder="Enter your email" className="px-3 border border-slate-400 rounded-md mt-2 w-full h-10"></input></div>
                    
                    <div className="font-bold  mt-4">Password</div>
                    <div><input type="text" placeholder="Enter your password" className="px-3 border border-slate-400 rounded-md mt-2 w-full h-10"></input></div>

                    <div className=" mt-6 bg-slate-800 hover:bg-slate-950 rounded-md"><button className = 'text-slate-50 font-bold h-10 w-full text-center'>Sign Up</button></div>
                </div>
                
            </div>
        </div>
    )
}