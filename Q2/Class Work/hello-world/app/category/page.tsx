import Link from 'next/link'
import Button from '../components/button'
// import Button from '@/app/components/button'


function categories(){
    return (
    <div>
        <h3>
           All Categories
        </h3>

        <Link href="/category/category1" className='link'>Link to Category 1</Link>

        <Button/>

    </div>
)
}

export default categories 