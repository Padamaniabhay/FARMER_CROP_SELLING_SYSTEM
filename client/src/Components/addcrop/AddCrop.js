import React, { useState } from 'react';
import FormData from "form-data"
import { useDispatch } from 'react-redux';


import { Addcrop } from '../../Redux/Crop/Crop.action';
import { Link } from 'react-router-dom';

const AddCrop = () => {

  const [addcropData, setAddcropData] = useState({
    name: "",
    quantity: "",
    price: 0,
    descript: "",
    address: "",
    image: "",
    category: "fruit"
  });


  const dispatch = useDispatch();

  const handleChange = (e) => setAddcropData((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  const categorychoose = (e) => {
    setAddcropData((prev) => ({ ...prev, category: e.target.value }))
    // setcategorydropdown((prev) => prev = !prev)
  }


  // const [categorydropdown, setcategorydropdown] = useState(false);
  // const categoryDropDownfn = () => setcategorydropdown((prev) => prev = !prev)

  const uploadImage = (e) => {
    setAddcropData((prev) => ({ ...prev, image: e.target.files[0] }))
  }

  const submit = () => {
    const formdata = new FormData();
    formdata.append('image', addcropData.image, addcropData.image.name);
    formdata.append('name', addcropData.name);
    formdata.append('quantity', addcropData.quantity);
    formdata.append('price', addcropData.price);
    formdata.append('descript', addcropData.descript);
    formdata.append('address', addcropData.address);
    formdata.append('category', addcropData.category);

    // console.log({image:addcropData.image});

    // console.log(formdata.get("name"));


    dispatch(Addcrop(formdata));

    setAddcropData({
      name: "",
      quantity: "",
      price: 0,
      descript: "",
      address: "",
      image: "",
      category: "fruit"
    })
  }

  return (
    <>
      {/* headding */}
      <div className='text-lg text-center py-3 '>
        <h1 className='text-4xl font-semibold py-2'>SUPPLIER</h1>
        <p className='text-left'> A cash crop or profit crop is an agricultural crop which is grown to sell for profit. It is typically purchased by parties separate from a farm. ... In the least developed countries, cash crops are usually crops which attract demand in more developed nations, and hence have some export value.</p>
      </div>
      {/* buttons */}
      <div className='flex-wrap'>
        <form className='flex gap-8 w-full md:px-52'>
          <div className='w-1/2 flex flex-col gap-2'>
            <div>
              <label className="block mb-2 font-bold text-gray-800" id="Name"> Name</label>
              <input type="text"
                onChange={handleChange}
                className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Enter  Name' id='name' />
            </div>
            <div className='flex flex-row gap-3 items-baseline py-2'>
              <label className="block mb-2 font-bold text-gray-800" id="Category" > Category</label>
              {/* <div onClick={categoryDropDownfn} className=" w-full py-1 relative px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Enter  Category' id='category' >{addcropData?.cetegory}</div>
              {categorydropdown && <div className='absolute flex flex-col gap-1'>
                <div type="text" onClick={categorychoose} className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none bg-crop-400 items-center " placeholder='Enter  Category' id='fruit' >Fruit</div>
                <div type="text" onClick={categorychoose} className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none bg-crop-400 items-center " placeholder='Enter  Category' id='vegetable' >Vegetable</div>
                <div type="text" onClick={categorychoose} className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none bg-crop-400 items-center " placeholder='Enter  Category' id='cereal' >Cereal</div>
              </div>} */}
              <select name="category" onClick={categorychoose} id="category" className='w-24 px-3 py-1 bg-crop-300 text-white'>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="cereal">Cereal</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-800" id="Address">Address</label>
              <input type="text"
                onChange={handleChange}
                className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Enter Address' id='address' />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-800" id="Product Size">Product Size</label>
              <input type="text"
                onChange={handleChange}
                className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Enter ProducSize in Kg' id='quantity' />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-800" id="Price">Price</label>
              <input type="text"
                onChange={handleChange}
                className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Select Crop' id='price' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-2'>
            <div>
              <label className="block mb-2 font-bold text-gray-800" id="image">image </label>
              <input type="file"
                onChange={uploadImage}
                className=" w-full py-1 px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Select image' id='image' />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-800" id="Description ">Description *</label>
              <textarea type="text"
                onChange={handleChange}
                rows={4} className="w-full py-1 px-2 border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center " placeholder='Enter Description' id='descript' />
            </div>

            <div className=" mb-2 font-bold py-5 ">
              <Link to={"../../"}>
                <div
                  onClick={submit}
                  className="w-full py-1 px-2 bg-crop-400 text-white  border-gray-400 border-2 rounded outline-none focus:border-crop-400 items-center" id='Submit'  >
                  Submit
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCrop;
