import Link from "next/link";
import { ProductList } from "../page";
const SearchResCar = (props:ProductList) => {
    return ( 
    props.products.map((item)=>(
        <div className="border-b flex pb-5">
        <img
          src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
          alt=""
          className="w-44 rounded"
        />
        <div className="pl-5 text-black">
          <h2 className="text-3xl">{item.productLoaction}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">{item.productReview}</div>
            <p className="ml-2 text-sm">{item.productReview}</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4">$$$</p>
              <p className="mr-4">{item.productType}</p>
              <p className="mr-4">{item.productType}</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href={"restaurantdetail"}>View more information</Link>
          </div>
        </div>
      </div>
    )
    ))
}
 
export default SearchResCar;