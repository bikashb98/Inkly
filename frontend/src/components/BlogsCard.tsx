

interface BlogsCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}


export function BlogsCard({ authorName, title, content, publishedDate }: BlogsCardProps) {

    return (
        <div className=" ml-15 pl-5 mr-50 pr-50 ">
            <div className="flex">
                <div className=" flex bg-slate-200 h-10 w-10 rounded-full items-center justify-center font-medium text-xl text-slate-600">{authorName.slice(0, 1)}</div>
                <div className="px-2 py-3 text-slate-400 text-sm">
                    <span className="font-semibold text-slate-600">{authorName}</span>
                    <span className="px-0.5"> • {publishedDate}</span>
                </div>
            </div>
            
            <div className="mt-2 font-bold text-xl">{title}</div>
            <div className="mt-1 text-slate-800 px-2 ">{content.length > 200 ? content.slice(0, 200) +"..." : content}</div>
            <div className = "mt-7 text-slate-500 px-2">{`${Math.ceil(content.length / 200)} min read`}</div>
            <div className="bg-slate-300 mt-10 w-full h-0.25 "></div>
        </div>
    )
}
