import Button from '@/app/components/button'
import Link from 'next/link'
// import b from '/'




export default function cat1(){
    return (
    <>
    {/* these classes belong to tailwind css */}


<a className='link' href="/category">Back button using anchor</a>

<Link className='link' href="/category">Back button using link</Link>


        <h3 className="text-blue-500 text-xl ">
           All Categories
        </h3>
        {/* <h2 className="text-blue-500 text-xl ">
           All Categories
        </h2> */}

        <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
        </ul>

        {/* <button className='button'>Click Me</button> */}

        <Button/>

    </>
)
}

