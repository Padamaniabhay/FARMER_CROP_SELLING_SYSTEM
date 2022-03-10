import React from 'react'

const about = () => {
  return (
    <>
      <div>
        <section className='p-10'>
          <div className='container'>
            <div className='row'>
              <h1 className='text-blue-900 text-5xl text-center font-serif'>About Us</h1>
              <div className=''>
                <div className='w-full mt-5 p-10 flex bg-slate-200'>
                  <div className='w-1/2 text-center font-semibold pt-10 mx-10 '>
                    The purpose of Cropsell is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers
                    <p>We work close by agriculturists, makers, producers, retailers, governments, and different associations to satisfy our motivation to support the world in a protected, dependable and practical way. Together, we make efficiencies, create developments, and help networks flourish.
                    </p>
                    {/* <p>
                      In India, Crop Sell ‘s activities began in 1987. It has organizations in refined oils, nourishment fixings, grain and oilseeds, cotton, creature sustenance, mechanical claims to fame, and exchange organized back. ‘Organization Name’ markets driving buyer brands of palatable oils, for example, Nature Fresh, Gemini, Sweekar, Leonardo Olive Oil, Rath and Sunflower brand of hydrogenated fats.
                    </p> */}
                  </div>
                  <img src='https://aaes.auburn.edu/wp-content/uploads/sites/2/sites/2/2018/07/Agronomy-Soils-minor-header.jpg' className='h-1/2 w-1/2' />
                </div>
                <div className='flex bg-slate-50 py-5 px-10'>
                  <img src='https://www.takshilalearning.com/wp-content/uploads/2017/06/class-8-science-crop-production-and-management-Agriculture.jpg' className='h-1/2 w-1/2' />
                  <div className='w-1/2 mx-10 text-center pt-10 font-semibold'>
                    It likewise advertises wheat flour under the Nature Fresh brand name. The Animal Nutrition business of ‘Crop sell’ gives creature feed and premix and nourishment for water, dairy and poultry. It markets creature feed and premix under the brands, for example, Provimi, Purina, Citura and ‘Crop Sell’.
                    <p>The Grains and Oilseed business begins grains and oilseeds at 200 capacity areas. It utilizes in excess of 3500 representatives working crosswise over workplaces and plants and a system of distribution centers and terminals.</p>
                  </div>
                </div>

                <div className='my-5 text-center bg-slate-200'>
                  <div className='text-center text-5xl font-serif '>
                    OUR SERVICES
                  </div>
                  <div className='text-center px-44 font-semibold py-5 text-2xl'>
                    Agri marketplace provides all of the following services through internal operations in combination with our specialised partnership network.
                  </div>
                  <img src='https://agrimp.com/assets/services/Services_agrimp_en_crop-acab5e797bfeca134d05ff6fed2212e5f6a2b2a361a0b8066bec262d6e27f7c5.png'
                    className='px-48' />
                </div>
                <div className='py-5 '>
                  <div className='text-center text-5xl font-serif '>
                    KEY FEATURES
                  </div>
                  <div className='text-center px-44 font-semibold py-5 text-2xl'>
                    Discover how Agri Marketplace can benefit you and all other food supply chain actors.
                  </div>
                  <div className='flex py-10 '>
                    <div className='w-1/4 px-5'>
                      <img src='https://www.nicepng.com/png/detail/247-2474974_e-commerce-e-commerce-development.png'
                        className='w-64 h-64 ml-8' />
                      <div className='text-center text-2xl font-serif pt-3'>
                        TRANSPARENCY
                      </div>
                      <div className='text-center text-xl font-semibold '>
                        Direct transactions between farmers and industry/retail
                      </div>
                    </div>
                    <div className='w-1/4 px-5'>
                      <img src='https://www.greenqueen.com.hk/wp-content/uploads/2021/02/Choose-The-World-You-Want-Virtual-Fairtrade-Festival-To-Spotlight-Climate-Impact-On-Food-Systems.jpg'
                        className='w-64 h-64 ml-8' />
                      <div className='text-center text-2xl font-serif pt-3'>
                      FAIRTRADE
                      </div>
                      <div className='text-center text-xl font-semibold '>
                      Redistribution of value in food supply chain
                      </div>
                    </div>
                    <div className='w-1/4 px-5'>
                      <img src='https://blog.varstreetinc.com/wp-content/uploads/2019/03/What-makes-an-Ecommerce-Store-user-friendly-1280x720.png'
                        className='w-64 h-64 ml-8' />
                      <div className='text-center text-2xl font-serif pt-3'>
                      USER FRIENDLY
                      </div>
                      <div className='text-center text-xl font-semibold '>
                      Reduce costs to buyers without losing reliability
                      </div>
                    </div>
                    <div className='w-1/4 px-5'>
                      <img src='https://www.fpt-software.com/wp-content/uploads/sites/2/2019/09/Screenshot_2.png'
                        className='w-64 h-64 ml-8' />
                      <div className='text-center text-2xl font-serif pt-3'>
                      FOOD TRACEABILITY
                      </div>
                      <div className='text-center text-xl font-semibold '>
                      Crop reliability through supply chain traceability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default about