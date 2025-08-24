import {useEffect, useState} from 'react'
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

interface Post {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name":string;
    }
}
export const usePost = ({id} : {id: string}) => {
     const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post>()

    
     
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
          .then (response => {
            setPost(response.data.posts);
            setLoading(false);
          })  
    }, [id])

    return {
        loading,
        post
    }
}



export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        
        if (!token) {
            navigate('/signin');
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
          .then (response => {
            setPosts(response.data.posts);
            setLoading(false);
          })
    }, [navigate])

    return {
        loading,
        posts
    }
}