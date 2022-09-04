import React from "react"
import { Link } from "react-router-dom"
import { IInvoice } from "../../interfaces/IIvoice"

interface IProps {
    headings: Partial<IInvoice>
    invoices: IInvoice[]
}

const TableView: React.FC<IProps> = ({ headings, invoices }) => {
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    {Object.keys(headings).map((key, index) => {
                        return (
                            <th key={key + index} className="py-3 px-6">
                                {headings[key as keyof IInvoice]}
                            </th>
                        )
                    })}
                    <th className="py-3 px-6">
                        <span className="sr-only">View</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {invoices &&
                    invoices.map((invoice) => {
                        return (
                            <tr
                                key={invoice.ISSUE_ID}
                                className="bg-white hover:bg-gray-50"
                            >
                                {Object.keys(headings).map((key, index) => {
                                    return (
                                        <th
                                            key={index}
                                            className="w-44 py-4 px-6 whitespace-nowrap font-medium "
                                        >
                                            {invoice[key as keyof IInvoice]}
                                        </th>
                                    )
                                })}

                                <td className="w-44 py-4 px-6 text-right">
                                    <Link
                                        to={`/${invoice.ISSUE_ID}`}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default TableView
