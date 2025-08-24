import { usePost } from "../hooks";
import { Article } from "./Article";
import {useParams} from "react-router-dom"
import { Appbar } from "../components/Appbar";
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
            <Appbar authorName="Anonymous" />
            <Article />
        </div>
    )
}