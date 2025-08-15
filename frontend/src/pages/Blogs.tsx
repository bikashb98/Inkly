import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { usePosts } from "../hooks"
export function Blogs (){
   const {loading, posts} = usePosts();

   if (loading) {
    return <div>
        loading...
    </div>
   }

   
    return (
        <div>
            <Appbar authorName="User" />
            <div>
                {posts.map((post: any) => (
                    <BlogsCard 
                        key={post.id}
                        authorName={post.author.name || "Anonymous"}
                        title={post.title}
                        content={post.content}
                        publishedDate="2023-10-01"
                    />
                ))}
            </div>
        </div>
    )
}