import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className="relative text-white overflow-hidden">
    <Image 
        src="/about.svg"
        alt="Description of Image"
        width={1600}      
        height={0}         
      />

<div className='text-center md:m-5'>
  <h1 className='md:text-5xl text-xl m-5 font-bold text-red-400'>About Us</h1>
  <p className='md:px-64 mt-2 px-4 font-semibold text-black'>
Jeejal Studio specializes in producing music, movies, and Islamic content, including nohas and naats.
 With a passion for quality, they craft soulful melodies and cinematic experiences that resonate deeply with audiences worldwide.</p>
</div>

<div className='text-black p-12'>
    <h1 className='font-bold text-4xl mb-5'>Video recording</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis expedita tempora nostrum commodi ratione eum nulla veritatis corporis, laborum illum eveniet molestias quasi accusamus minus quam voluptas accusantium sunt!
     uam rerum adipisci reiciendis numquam in voluptatum, cum accusamus magni quia ipsam voluptatem molestiae consectetur repellat ullam tempore alias amet, eveniet commodi obcaecati reprehenderit corporis ea. Soluta sapiente harum veniam?</p>
</div>

<div className='text-black p-12'>
    <h1 className='font-bold text-4xl mb-5'>Music Prdoduction </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis expedita tempora nostrum commodi ratione eum nulla veritatis corporis, laborum illum eveniet molestias quasi accusamus minus quam voluptas accusantium sunt!
     uam rerum adipisci reiciendis numquam in voluptatum, cum accusamus magni quia ipsam voluptatem molestiae consectetur repellat ullam tempore alias amet, eveniet commodi obcaecati reprehenderit corporis ea. Soluta sapiente harum veniam?</p>
</div>

<div className='text-black p-12'>
    <h1 className='font-bold text-4xl mb-5'>Video editing and motion graphics </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis expedita tempora nostrum commodi ratione eum nulla veritatis corporis, laborum illum eveniet molestias quasi accusamus minus quam voluptas accusantium sunt!
     uam rerum adipisci reiciendis numquam in voluptatum, cum accusamus magni quia ipsam voluptatem molestiae consectetur repellat ullam tempore alias amet, eveniet commodi obcaecati reprehenderit corporis ea. Soluta sapiente harum veniam?</p>
</div>

<div className='text-black p-12'>
    <h1 className='font-bold text-4xl mb-5'>3D product commercial</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis expedita tempora nostrum commodi ratione eum nulla veritatis corporis, laborum illum eveniet molestias quasi accusamus minus quam voluptas accusantium sunt!
     uam rerum adipisci reiciendis numquam in voluptatum, cum accusamus magni quia ipsam voluptatem molestiae consectetur repellat ullam tempore alias amet, eveniet commodi obcaecati reprehenderit corporis ea. Soluta sapiente harum veniam?</p>
</div>

<div className='text-black p-12'>
    <h1 className='font-bold text-4xl mb-5'>Film Production</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis expedita tempora nostrum commodi ratione eum nulla veritatis corporis, laborum illum eveniet molestias quasi accusamus minus quam voluptas accusantium sunt!
     uam rerum adipisci reiciendis numquam in voluptatum, cum accusamus magni quia ipsam voluptatem molestiae consectetur repellat ullam tempore alias amet, eveniet commodi obcaecati reprehenderit corporis ea. Soluta sapiente harum veniam?</p>
</div>

  </div>
  )
}

export default page