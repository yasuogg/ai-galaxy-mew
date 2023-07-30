import { useRouter } from "next/router"

import Link from "next/link"

import error from '@/components/error'

export default function myid(){
    const router=useRouter()
    return(
        <>
        <h1>ID page {router.query.id}</h1>
        </>
    )
}