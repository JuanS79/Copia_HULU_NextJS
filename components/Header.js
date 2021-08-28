import{
    BadgeCheckIcon,
    HomeIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,    
    } from '@heroicons/react/outline'

import Image from "next/dist/client/image"
import HeaderItem from "./HeaderItem"

export default function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-row justify-evenly max-w-2xl'>
                <HeaderItem title='Medalla' Icon={BadgeCheckIcon} />
                <HeaderItem title='Casita' Icon={HomeIcon} />
                <HeaderItem title='Coleccion' Icon={CollectionIcon} />
                <HeaderItem title='RayoMcquinn' Icon={LightningBoltIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />
                <HeaderItem title='usuario' Icon={UserIcon} />
            </div>
            <div>
                <Image
                    className='object-contain' 
                    src='https://links.papareact.com/ua6'    
                    width={200} height={100}
                    />  
                <Image 
                    className='object-contain'
                    src='https://www.nicepng.com/png/full/41-416172_homer-simpson-homer-simpson-png.png'    
                    width={200} height={100}
                    />
            </div>


        </header>
    )
}
