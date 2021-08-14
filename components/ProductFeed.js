import Product from './Product';
import ProductWithCart from './ProductWithCart'
import Image from 'next/image'
import imgbnr from '../images/bnr.png'
import bannerImg from '../images/3953a423-fabe-4d83-b381-aaa0ffc3d744.png'


function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-4 lg:grid-cols-6">

            {products.slice(0,6).map(({id, title, price, description, category, image}) => (
                <Product
                    key={id}
                    id={id} 
                    title={title} 
                    price={price}
                    description={description} 
                    category={category} 
                    image={image}
                 />
            ))}

            <div className="md:col-span-full flex justify-center ">
                <Image 
                src = {imgbnr}
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>

            <div className="relative col-span-full mt-10">
          <h2 className="font-bold text-xl ">Just For You</h2>
          <button className="p-1 absolute top-2 right-2 text-primaryclr border-2 border-black">SHOP MORE</button>
        </div>

            {products.slice(6,18).map(({id, title, price, description, category, image}) => (
                <ProductWithCart
                    key={id}
                    id={id} 
                    title={title} 
                    price={price}
                    description={description} 
                    category={category} 
                    image={image}
                 />
            ))}
            
        </div>
    )
}

export default ProductFeed
