import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Invoice from "../views/invoice"
import Invoices from "../views/invoices"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Invoices />}></Route>
                <Route path="/:id" element={<Invoice />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
