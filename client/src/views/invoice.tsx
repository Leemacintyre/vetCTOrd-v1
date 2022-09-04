import React, { ReactNode, useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { IInvoice } from "../interfaces/IIvoice"
import { IContext, InvoiceContext } from "../services/invoice.context"

interface ITitleProps {
    children: ReactNode
}

const Title: React.FC<ITitleProps> = ({ children }) => {
    return <div className="font-bold text-2xl py-2 text-ctDark">{children}</div>
}

interface IProps {}

const Invoice: React.FC<IProps> = () => {
    const { invoices } = useContext<IContext>(InvoiceContext)
    const [invoice, setInvoice] = useState<IInvoice | null>(null)

    const params = useParams()

    useEffect(() => {
        setInvoice(
            invoices.find((invoice) => invoice.ISSUE_ID === params.id) || null
        )
    }, [invoices, params.id])

    useEffect(() => {
        console.log(invoice)
    }, [invoice])

    return (
        <div className="text-ctLight font-semibold">
            <div className="w-full flex justify-end pt-4 pr-4">
                <Link
                    to={"/"}
                    className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Back
                </Link>
            </div>
            <div className="p-4">
                {invoice && (
                    <div className="m-auto max-w-6xl border-2 shadow-lg rounded-md p-4">
                        <div className="flex justify-between">
                            <img
                                src="data:image/png;base64,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"
                                alt=""
                            />
                            <div className="p-6">
                                <Title>VetCT</Title>
                                <div>
                                    Closure Date:{" "}
                                    {invoice.FIRSTCLOSUREDATE.split(" ")[0]}
                                </div>
                                <div>Invoice No: {invoice.ISSUE_ID}</div>
                                <div>case ID: {invoice.CASEID}</div>
                                <div>
                                    Clinic Profile Key:{" "}
                                    {invoice.CLINICPROFILEKEY}
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <Title>Invoice To:</Title>
                            <div>{invoice.MANAGINGCOMPANY}</div>
                            <div>{invoice.COMPANYTOINVOICE}</div>
                            <div>{invoice.HOSPITAL}</div>
                            <div>{invoice.CORPORATEGROUP}</div>
                            <div>{invoice.COUNTRY}</div>
                        </div>

                        <div className="p-6 border-2 rounded-md">
                            <Title>Description</Title>
                            <div>
                                Invoicing Turnaround:{" "}
                                {invoice.TURNAROUNDFORINVOICING}
                            </div>

                            <div>Specialist: {invoice.REPORTINGSPECIALIST}</div>
                            <div>Specialty: {invoice.SPECIALTY}</div>

                            <div className="py-6">
                                <div>Owner: {invoice.OWNER}</div>
                                <div>Patient: {invoice.PATIENT}</div>
                            </div>

                            <div>Species: {invoice.SPECIES}</div>
                            <div>Body area count: {invoice.BODYAREACOUNT}</div>
                            <div>Body Areas: {invoice.BODYAREAS}</div>
                            <div>Images Received: {invoice.IMAGESRECEIVED}</div>
                        </div>

                        <div className="p-6  flex flex-col items-end">
                            <div>
                                <Title>Price</Title>
                                <div>{`Additional Fees: ${
                                    invoice.EXTRAFEE || 0
                                } ${invoice.CURRENCY}`}</div>
                                <div>
                                    {`Price Before Discount: ${
                                        invoice.PRICEBEFOREDISCOUNT || 0
                                    } ${invoice.CURRENCY}`}
                                </div>
                                <div>
                                    Discount:{" "}
                                    {`${
                                        parseInt(
                                            invoice.PRICEBEFOREDISCOUNT || "0"
                                        ) -
                                        parseInt(
                                            invoice.PRICEAFTERDISCOUNT || "0"
                                        )
                                    } ${invoice.CURRENCY}`}
                                </div>
                                <div>
                                    {`Total Price: ${
                                        invoice.PRICEAFTERDISCOUNT || 0
                                    } ${invoice.CURRENCY}`}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Invoice
