import React from 'react'
// import React from 'public/img/logo.png'

export default function index() {
  return (
<div>
  {/* HomePage */}
<header className='bg-[#DDCEBF] z-50 fixed top-0 left-0 right-0'>
  <nav class="bg-black-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
            <img src="/assets/img/logo.png" alt="" class="w-10 h-10" />
            <a href="#" class="text-black text-xl font-bold" style={{fontFamily: 'Poppins'}}>MushRoom</a>
        </div>
        
        <ul class="flex space-x-10">
            <li><a href="#" class="text-black">About</a></li>
            <li><a href="#" class="text-black">How To Use</a></li>
            <li><a href="#" class="text-black">Gallery</a></li>
            <li><a href="#" class="text-black">Contact</a></li>
        </ul>
    </div>
  </nav>
</header>

  
  <div className='flex ml-20 mt-40 gap-10'>
    <div>
      <img src='/assets/img/group1.png' alt=''/>
    </div>
    <div className='container mx-auto'>
      <img src='/assets/img/mushroom.png' alt='' className='w-20 h-20' />
      <h1 className='text-5xl font-bold mt-5'>
        MushRoom Smart <br/>
      </h1>
        <p className='text-5xl font-bold my-5'>Home</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p>
      </div>
      <br/>
        <button className='bg-[#40362C] text-white p-2'>Explore More!</button>
    </div>
  </div>

{/* About Us */}
  <div className="flex items-center justify-center min-h-screen relative">
  <div className="flex flex-col md:flex-row items-center relative z-10">
    <div className="mr-10 md:mr-0"> {/* Menggunakan margin kanan pada tampilan desktop */}
      <div className="relative">
        <img
          src="/assets/img/about.png"
          alt="About Us"
          className="w-80 h-70 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg shadow-lg" // Menambahkan shadow dan rounded corners
        />
        <div className="absolute bg-[#665A48] px-5 py-3 text-center text-white opacity-75 top-10 -left-10 rounded-lg">
          <p>47+ Jenis Jamur</p>
        </div>
        <div className="absolute bg-[#665A48] px-5 py-3 text-center text-white opacity-75 -bottom-7 right-10 rounded-lg">
          <p>700+ <br/>Manfaat Jamur</p>
        </div>
      </div>
    </div>
    <div className='ml-40'>
      <h4 className="text-xl font-semibold mb-2 border-l-4 border-neutral-700 pl-5">About Us</h4>
      <h1 className='text-5xl font-bold'>MushRoom Smart <br/> Home</h1>
      <p className="text-lg text-gray-600 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/>
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur<br/>
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br/>
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>

<div className='flex item-center justify-center min-h-screen relative'>
    
</div>


    
</div>
  )
}


