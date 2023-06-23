
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Image from "next/image"
import Loader from "../loader"


type obj = {
    url: string
    des: string
    price: string
    description: string
}
const Myposts = () => {


    const [state, setstate] = useState<obj[]>([])
    const [intial, setintial] = useState(true)

    const Rout = useRouter()
    const myId = Rout.query.post

    const myApi = async (myId:any) => {
        const res = await fetch(`http://localhost:3004/Posts/${myId}`)
        const data = await res.json()
        setstate([data])
        setintial(false)

    }


    useEffect(() => {
        
        myApi(myId)

    }, [myId])

    // console.log(state[0])

    return (
        <div className="bg-black min-h-[100vh] py-10 px-12">
            {
                intial && (<Loader />)
            }
            {

                !intial && (<div className=" text-white ">
                    <Image src={state[0].url} alt="" width={300} height={200} />
                    <h1 className="pt-10 text-5xl ">{state[0].des}</h1>
                    <h1 className="pt-10">{state[0].price} <span className='line-through '>20.99</span></h1>
                    <p className="pt-10 text-xl w-[50%]">{state[0].description}</p>
                </div>)
            }


        </div>
    )
}
export default Myposts