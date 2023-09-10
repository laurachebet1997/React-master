import type { NextApiResponse, NextApiRequest } from 'next'

type Data ={
    name: String
}

export default function handler (
    req:NextApiRequest ,
    res:NextApiResponse<Data>
){
    res.status(200).json({name:"laura"})
}