import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            {isLogin? (<Outlet />) : (<Navigate to="login"/>)}
        </>
    )
}

export default PrivateRoute