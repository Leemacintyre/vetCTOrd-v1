import React, { useState, createContext, ReactNode, useEffect } from "react"
import { IInvoice } from "../interfaces/IIvoice"

export interface IContext {
    invoices: IInvoice[]
}

interface IProps {
    children: ReactNode
}

const getInvoiceData = async () => {
    return await fetch(`http://localhost:5001/`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => data)
}

export const InvoiceContext = createContext<IContext>({ invoices: [] })

export const InvoiceContextProvider: React.FC<IProps> = ({ children }) => {
    const [invoices, setInvoices] = useState<IInvoice[]>([])

    useEffect(() => {
        ;(async () => {
            const { data } = await getInvoiceData()
            setInvoices(data)
        })()
    }, [])

    return (
        <InvoiceContext.Provider value={{ invoices }}>
            {children}
        </InvoiceContext.Provider>
    )
}
