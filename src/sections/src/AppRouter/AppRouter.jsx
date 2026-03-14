import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Tasks from "../pages/Tasks"
import Mainlayout from "../Mainlayout"

export default function AppRouter() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<div><Dashboard /></div>} />
                    <Route path="/task" element={<Tasks />} />
                </Route>

            </Routes>
        </div>
    )
}
