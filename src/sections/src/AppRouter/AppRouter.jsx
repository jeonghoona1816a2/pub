import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Mainlayout from "../Mainlayout"
import Tasks from "../pages/Tasks"
import StepMove from "../pages/StepMove"

export default function AppRouter() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<div><Dashboard /></div>} />
                    <Route path="task" element={<Tasks />} />
                    <Route path="StepMove" element={<StepMove />} />
                </Route>
            </Routes>
        </div>
    )
}
