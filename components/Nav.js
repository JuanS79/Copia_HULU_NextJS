import { useRouter } from "next/router";
import request from "../utility/requests";

export default function Nav() {

    const router = useRouter()

    return (
        <nav className='relative'>
            <div className='flex p-5 space-x-5 sm:space-x-10 whitespace-nowrap justify-between
                overflow-x-scroll scrollbar-hide'> 
                {Object.entries(request).map(
                    ([key, {title, url}]) => (
                        //<div className='mx-5'>
                            <h2 key={key} className='flex-grow cursor-pointer last:pr-24 transition duration-100 
                                transform hover:scale-125 hover:text-white active:text-yellow-500'
                                onClick={()=> router.push(`/?genre=${key}`) }
                            >
                                {title}</h2>
                        //</div>
                    )
                )}

            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'>

            </div>
            
        </nav>
    )
}
