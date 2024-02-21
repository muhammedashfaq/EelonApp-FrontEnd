import React from 'react'

const LandingPagedetails = () => {
  return (

    <div>
        
    <section id="home" className="bg-gray-100 py-16">
      {/* Home Section Content */}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our School</h1>
        {/* Add other content for the Home section */}
        <section className="bg-gray-300 text-gray-100">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading sm:text-6xl">Welcome to Our School
          <span className="text-amber-600">Empowering Minds</span>
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Providing quality education to inspire and shape young minds.
          <br className="hidden md:inline lg:hidden" /> Join us in the journey of knowledge and growth.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-amber-600 text-gray-50">Explore More</a>
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Admissions</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="path/to/school-image.jpg" alt="School Image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
    </div>
  </section>
      </div>
    </section>

    <section id="about" className="py-16">
      {/* About Section Content */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        {/* Add other content for the About section */}<section className="about py-20">
<div className="container mx-auto">
  <h2 className="text-3xl text-gray-800 font-bold mb-4">About School Name</h2>
  <p className="text-gray-600 mb-8">Founded in 1950, School Name is a renowned institution dedicated to providing...</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h3 className="text-2xl text-gray-800 font-bold mb-2">Our Mission</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
    </div>
    <div>
      <h3 className="text-2xl text-gray-800 font-bold mb-2">Our Values</h3>
      <ul className="text-gray-600 list-disc">
        <li>Excellence</li>
        <li>Innovation</li>
        <li>Community</li>
        <li>Diversity</li>
      </ul>
    </div>
  </div>
</div>
</section>

      </div>
    </section>

    <section id="academics" className="bg-gray-100 py-16">
<div class="py-16 white">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What's our customers say</h2>
        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div class="h-full flex flex-col justify-center space-y-4">
              <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
              <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
    </section>

    <section id="contact" className="py-16">
      {/* Contact Section Content */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        {/* Add other content for the Contact section */}
      </div>
    </section>
    <section id="" className="py-16">










      
   
    </section>
  </div>  )
}

export default LandingPagedetails