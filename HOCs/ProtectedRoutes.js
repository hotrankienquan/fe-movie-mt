import { useRouter } from 'next/router';
import React from 'react'
import {useSelector} from "react-redux"


const ProtectedRoute = ({children}) => {
    const router = useRouter();
    const user = useSelector((state) => state.auth.login.currentUser) || null;
    console.log(user)
    
    if(user == null || !user.accessToken){
        router.push("/")
    }
    return children

};

export default ProtectedRoute;
