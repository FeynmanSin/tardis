import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'umi'

const Index: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home')
    }, [])
    return (
        <Outlet />
    )
}

export default Index;