import React, { useState } from 'react';

//Images
import imageJohn from '../assets/image-john.jpg'
import imageTanya from '../assets/image-tanya.jpg'
import prevIcon from '../assets/icon-prev.svg'
import nextIcon from '../assets/icon-next.svg'
import quotes from '../assets/pattern-quotes.svg'
import backgroundImage from '../assets/pattern-bg.svg'





const Testimonial = () => {
   
    const testimonial = [
      {
      name:'Tanya Sinclair',
      job: 'UX Engineer',
      image: imageTanya,
      testimonial:'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    },
    {
      name:'Jhon Tarkpor',
      job: 'Front-end Developer',
      image: imageJohn,
      testimonial:'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
    },
  ]


    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(testimonial[0].image)
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonial[0].testimonial)
    const [selectedName, setSelectedName] = useState(testimonial[0].name)
    const [selectedJob, setSelectedJob] = useState(testimonial[0].job)


    const previus = ()=> {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : testimonial.length -1; 
        setSelectedImage(testimonial[nextIndex].image)
        setSelectedTestimonial(testimonial[nextIndex].testimonial)
        setSelectedName(testimonial[nextIndex].name)
        setSelectedJob(testimonial[nextIndex].job)
        setSelectedIndex(nextIndex);
    }
    

    const next = () => {
        const condition = selectedIndex < testimonial.length -1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(testimonial[nextIndex].image)
        setSelectedTestimonial(testimonial[nextIndex].testimonial)
        setSelectedName(testimonial[nextIndex].name)
        setSelectedJob(testimonial[nextIndex].job)
        setSelectedIndex(nextIndex)
    }


  return (
    <header className='relative flex flex-row-reverse justify-center items-center '>
        <div >
            <img src={backgroundImage} alt="background" className='absolute top-0 -z-50 w-[24rem] ' />
            <div className='flex flex-col justify-center items-center  py-10 pl-10 '>
            <img src={selectedImage} alt="tanya photo" className='w-[17.5rem] '/>
            <div className='flex bg-white w-28 h-12 justify-evenly items-center rounded-3xl -mt-3 mb-12 '>
            <button className=' grid place-content-center w-12 h-12' onClick={previus} >
                <img src={prevIcon} alt="prev icon" />
            </button>
            <hr className='w-[1px] h-6 bg-gray-300' />
            <button className=' grid place-content-center w-12 h-12' onClick={next}>
                <img  src={nextIcon} alt="next icon"/>
            </button>
            
        </div>
        <div className='relative flex flex-col items-center justify-center'>
            <div className=''>
                <img src={quotes} alt="quotes" className='w-20' />
            </div>
            <div className=' flex flex-col gap-2 text-center absolute w-[19.1rem] top-10 -left-22 text-[1.06rem] tracking-wider'>
                <p>{selectedTestimonial}</p>
                <p className='font-bold'>{selectedName}</p>
                <p className='text-gray-400 -mt-2'>{selectedJob}</p>
            </div>
        </div>
            </div>
        </div>
        
    </header>
  )
}


export default Testimonial