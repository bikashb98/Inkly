import {useEffect, useState} from 'react'
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([])
     
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
          .then (response => {
            setPosts(response.data.posts);
            setLoading(false);
          })
    }, [posts])

    return {
        loading,
        posts
    }
}