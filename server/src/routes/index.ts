import { Request, Response } from "express"
import { Router } from "express"

import csv from "csvtojson"

const router: Router = Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        let data
        await csv()
            .fromFile("data.csv")
            .then((jsonObj) => {
                data = jsonObj
            })
        return res.status(200).json({
            status: 200,
            data,
        })
    } catch (error) {
        console.log(error)
    }
})

export default router
