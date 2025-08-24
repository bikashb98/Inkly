
import { useState } from "react";

interface ArticleProps {
    title: string;
    author: string;
    follow: boolean;
    body: string;

}
export function Article({title, author, follow, body}: ArticleProps) {
    const [isFollowing, setIsFollowing] = useState(follow);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };

    return(
        <div className="  my-15 ">
                <div className="border-b m border-slate-300"></div>
                <div className=" max-w-2xl my-15  mx-auto">
                    <div className="font-extrabold text-2xl font-headland" >{title}</div>
                    {/* Div for subheading */}
                    <div className="text-slate-500 text-xl my-5 font-bold font-headland"></div>
                    <div className="flex items-center gap-2">
                        <div className="flex my-3 bg-slate-200 h-8 w-8 rounded-full items-center justify-center font-medium text-lg text-slate-600">{author.slice(0,1)}</div>
                        <div className="flex  items-center text-sm "> {author}</div>
                        <div className="flex items-center"><button onClick={handleFollowClick} className="flex items-center h-8 border px-3 rounded-2xl text-sm">{isFollowing ? "Following" : "Follow"}</button></div>
                        <div className= 'text-slate-400 text-sm  '>{`${Math.ceil(body.length/200)} min read`} </div>
                        <div className = 'text-slate-400 text-sm'>•</div>
                        <div className="text-slate-400 text-sm">Jul 20, 2025</div>
                        
                    </div>
                    <div className="my-5 text-lg font-headland">{body}</div>
                </div>
                
        </div>
    )
}