

interface BlogsCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}


export function BlogsCard({ authorName, title, content, publishedDate }: BlogsCardProps) {
    
    return (
        <div className="max-w-2xl mx-auto px-6 py-6">
            <div className="flex items-center gap-3">
                <div className="flex bg-slate-200 h-6 w-6 rounded-full items-center justify-center font-medium text-lg text-slate-600">
                    {authorName.slice(0, 1)}
                </div>
                <div className="text-slate-400 text-sm">
                    <span className="font-semibold text-slate-600">{authorName}</span>
                    <span> • {publishedDate}</span>
                </div>
            </div>
            
            <div className="mt-4 font-bold text-xl text-slate-900">{title}</div>
            <div className="mt-2 text-slate-700 leading-relaxed">
                {content.length > 200 ? content.slice(0, 200) + "..." : content}
            </div>
            <div className="mt-4 text-slate-500 text-sm">{`${Math.ceil(content.length / 200)} min read`}</div>
            <div className="bg-slate-200 mt-8 w-full h-px"></div>
        </div>
    )
}
