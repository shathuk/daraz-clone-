import Image from 'next/image'
import Currency from 'react-currency-formatter'
function Product({id, title, price, description, category, image}) {
    return (
        <div className="flex flex-col p-2 z-30 m-5 bg-white">
            <Image src={image} width={100} height={150} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <div>
               <p className="text-primaryclr text-lg">Rs. {price} </p>
            </div>
            <div>
               <p className="text-xs"> <span className="line-through">Rs. {price*2} </span>-50%</p>
            </div>
        </div>
    )
}

export default Product;
