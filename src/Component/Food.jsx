import React ,{useState} from "react";
import { categories, data } from "../Data/data.js";

const Food = () => {
  // console.log(data);
  const [food , setFood] = useState(data)

  // fitter pizza/burger/etc

  const filterType = (category)=>(
    setFood(
      data.filter((item)=>{
        return item.category === category
      })
    )
    
  )

  const filterPrice = (price)=>(
    setFood(
      data.filter((item)=>{
        return item.price === price
      })
    )
  )
  return (
    <div className="max-w-[1640] m-atuo px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col  lg:flex-row justify-between  ">
        {/* Filter Type */}
        <div className="">
          <p className="font-bold text-gray-700 ">filter Price</p>
          <div className="flex justify-between flex-wrap ">
            <button  onClick={()=> setFood(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
            <button  onClick={()=> filterType('burger')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
            <button onClick={()=> filterType('pizza')}  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
            <button onClick={()=> filterType('salad')}  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
            <button onClick={()=> filterType('chicken')}  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
          </div>
        </div>

        {/* filter Price */}
        <div className="">
          <p className="font-bold text-gray-700 ">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full ">
            <button   onClick={() => filterPrice('$')}   className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" >$</button>
            <button    onClick={() => filterPrice('$$')}  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" >$$</button>
            <button    onClick={() => filterPrice('$$$')}   className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" >$$$</button>
            <button     onClick={() => filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" >$$$$</button>
          </div>
        </div>
      </div>


      {/* Dispalay Food */}
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-6 pt-4">
        {food.map((item , index)=>(
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 '>
            <img src={item.image} alt={item.name}  className="w-full h-[200px] object-cover rounded-t-lg "  />
            <div className="flex justify-between px-2 py-4">
            <div className="font-bold" >{item.name}</div>
            <div className="bg-orange-600 text-white rounded-lg p-1" >{item.price}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Food;
