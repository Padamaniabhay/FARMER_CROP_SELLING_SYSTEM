import React from 'react';

const AddCrop = () => {


  
  return (
  <>
  {/* headding */}
  <div className='text-lg text-center '>
      <h1 className='text-4xl font-mono'>SUPPLIER</h1>
      <p className='text-left'> A cash crop or profit crop is an agricultural crop which is grown to sell for profit. It is typically purchased by parties separate from a farm. ... In the least developed countries, cash crops are usually crops which attract demand in more developed nations, and hence have some export value.</p>
  </div>
  {/* buttons */}
  <div className='flex-wrap'>
    <form>
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Name"> Name</label>
      <input type="text" class=" w-full border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Enter  Name'id='Name'/>
     </div>
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Email">Email Adress/NIC</label>
      <input type="email" class="peer w-full border-gray-400 border-2 rounded outline-none focus:border-gray-800 "placeholder='Enter Email/NIC' id='Email'/>
      <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
      Please provide a valid email address.
    </p>
     </div>
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Address">Address</label>
      <input type="text" class=" w-full  border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Enter Address' id='Address'/>
     </div>
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Crop selection">Crop selection</label>
      <input type="button" class=" w-full border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Select Crop' id='Crop selection'/>
     </div>
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Product Size">Product Size</label>
      <input type="text" class=" w-full  border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Enter ProducSize in Kg' id='Product Size'/>
     </div>
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="image">image </label>
      <input type="file" class=" w-full  border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Select image' id='image'/>
     </div>

     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Phone Number">Phone Number</label>
      <input type="number" class=" w-full  border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Enter Phone No.' id='Phone Number'/>
     </div>
   
     <div>
     <label class="block mb-2 font-bold text-gray-800" for="Description ">Description *</label>
      <input type="text" class="w-full  border-gray-400 border-2 rounded outline-none focus:border-gray-800 " placeholder='Enter Description' id='Product Size'/>
     </div>

     <div class=" mb-2 font-bold text-gray-800" for="Submit ">
<button class="w-full   border-gray-400 border-2 rounded outline-none focus:border-gray-800" id='Submit'  >
Submit   
</button>
     </div>
     
    </form>

  </div>
  
  

  
  </>);
};

export default AddCrop;
