import { useRoutes } from "react-router-dom"
import routes from "../../routes"

function AllRouters() {
    const elem = useRoutes(routes)
    return (
        <>
            {elem}
        </>
    )
}

export default AllRouters
