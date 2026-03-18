import { useState, useEffect } from "react"
import { Office365UsersService } from "../generated"
import type { GraphUser_V1 } from "../generated/models/Office365UsersModel"

export default function Test() {

    const [data, setData] = useState<GraphUser_V1 | null>(null)

    async function fecthdata() {
        const data = await Office365UsersService.MyProfile_V2()
        if (data.success) {
            console.log("lod fetchdata:", data.data)
            setData(data.data)
        } else {
            console.error(data.error)
        }
    }

    useEffect(() => {
        fecthdata()
    }, [])

    return (
        <div>
            <h1>Test Component</h1>
            <p>This is a test component.</p>
            {data && (
                <div>
                    <p>Name: {data.displayName}</p>
                    <p>Email: {data.mail}</p>
                </div>
            )}
        </div>
    )
}