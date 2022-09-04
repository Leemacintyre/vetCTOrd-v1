import React, { useContext } from "react"

import TableView from "../components/table/tableView"
import { IContext, InvoiceContext } from "../services/invoice.context"

interface IProps {}

const Invoices: React.FC<IProps> = () => {
    const { invoices } = useContext<IContext>(InvoiceContext)

    return (
        <div className="m-auto flex flex-col items-center">
            <h1 className="text-4xl p-8 font-semibold text-ctDark">
                VetCT Invoices
            </h1>
            <div className="overflow-x-auto shadow-md sm:rounded-lg max-w-6xl">
                <TableView
                    headings={{
                        ISSUE_ID: "Invoice ID",
                        CASEID: "CASE ID",
                        FIRSTCLOSUREDATE: "DATE",
                        OWNER: "OWNER",
                        PATIENT: "PATIENT",
                    }}
                    invoices={invoices}
                />
            </div>
        </div>
    )
}

export default Invoices
