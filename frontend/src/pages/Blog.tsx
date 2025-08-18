import { usePost } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import {useParams} from "react-router-dom"
export function Blog( ) {
    const {id} = useParams(); 
    const {loading, post} = usePost({id: id || ""});
    if (loading) {
        return <div>
            loading...
        </div>
    }
    return (
        <div>
            <FullBlog />
        </div>
    )
}