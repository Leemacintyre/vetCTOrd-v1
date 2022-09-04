import React from "react"
import Router from "../../routes/router"
import { InvoiceContextProvider } from "../../services/invoice.context"

const App: React.FC = () => {
    return (
        <InvoiceContextProvider>
            <Router />
        </InvoiceContextProvider>
    )
}

export default App
