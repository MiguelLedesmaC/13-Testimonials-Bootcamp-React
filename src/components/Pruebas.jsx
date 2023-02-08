import React, { useState } from 'react'


const Header = () => {
    const testimonialTanya = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    const testimonialJhon = 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
    const imageTania = '../assets/image-tanya.jpg'
    const imageJhon = '../assets/image-john.jpg'

    const images = [imageTania, imageJhon]
    const testimonials = [testimonialTanya, testimonialJhon]
    const names = ['Tanya Sinclair', 'John Tarkpor']
    const jobs = ['UX Engineer', 'Front-end Developer']


    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0])
    const [selectedName, setSelectedName] = useState(names[0])
    const [selectedJob, setSelectedJob] = useState(jobs[0])


    const previus = ()=> {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : images.length - 1; 
        setSelectedImage(images[nextIndex])
        setSelectedTestimonial(testimonials[nextIndex])
        setSelectedName(names[nextIndex])
        setSelectedJob(jobs[nextIndex])
        setSelectedIndex(nextIndex);
    }
    

    const next = () => {
        const condition = selectedIndex < images.length -1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(images[nextIndex])
        setSelectedTestimonial(testimonials[nextIndex])
        setSelectedName(names[nextIndex])
        setSelectedJob(jobs[nextIndex])
        setSelectedIndex(nextIndex)
    }


  return (
    <header className='relative flex flex-row-reverse justify-center items-center '>
        <div >
            <img src="../../public/images/pattern-bg.svg" alt="background" className='absolute top-0 -z-50 w-[24rem] ' />
            <div className='flex flex-col justify-center items-center  py-10 pl-10 '>
            <img src={selectedImage} alt="tanya photo" className='w-[17.5rem] '/>
            <div className='flex bg-white w-28 h-12 justify-evenly items-center rounded-3xl -mt-3 mb-12 '>
            <button onClick={previus} >
                <img  src="../../public/images/icon-prev.svg" alt="prev icon" />
            </button>
            <button onClick={next}>
                <img  src="../../public/images/icon-next.svg" alt="next icon"/>
            </button>
            
        </div>
        <div className='relative flex flex-col items-center justify-center'>
            <div className=''>
                <img src="../../public/images/pattern-quotes.svg" alt="quotes" className='w-20' />
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


export default Header