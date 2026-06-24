import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <nav>
                <ul>
                    <li><Link to="settings">Settings</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}