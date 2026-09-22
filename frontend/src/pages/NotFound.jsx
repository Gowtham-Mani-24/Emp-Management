import { Link } from "react-router-dom"

export const NotFound = ()=>{
    return (
        <>
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>
                the page you are looking for does not exist
            </p>
            <Link to='/dashboard'>
            Go to Dashboard
            </Link>
        </div>
        </>
    )
}