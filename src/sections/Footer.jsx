import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2 text-4xl'>
            <p>Thank You For visiting </p>
            <p>|</p>
            <p>Lets work Together</p>
        </div>
        <div  className='flex gap-3'>
        <a href="https://github.com/account"
            target='blank' >
            <div className='social-icon'>
            
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' 
                />
            </div>
            </a>
        </div>


        <div  className='flex gap-3'>
        <a href="https://www.kaggle.com/taheriodgewala"
            target='blank' >
            <div className='social-icon'>
                <img src="/assets/taher-17.png" alt="github" className='w-1/2 h-1/2' />
            </div>
            </a>
        </div>


        <div  className='flex gap-3'>
        <a href="https://www.instagram.com/taher.innovates/#"
            target='blank' >
            <div className='social-icon'>
                <img src="/assets/instagram.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
            </a>
        </div>

    </section>
  )
}

export default Footer