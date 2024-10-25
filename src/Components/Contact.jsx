/* eslint-disable react/jsx-no-undef */
// import {useRef} from 'react'
// import {RiLinkedinBocFill} from "@remixicon/react"
// import { RiLinkedinBoxFill } from 'remixicon-react/RiLinkedinBoxFill';



// const Contact = () => {
//     const contactRef = useRef(null)
//   return (
//     <section className='py-16' id='contact' ref={contactRef}>

//         <div className='px-4 text-center'>
//             <h2 className='mb-8 text-3xl font-medium lg:text-4xl'>Contact</h2>
//             <p className='mb-4 text-lg lg:text-xl'>
//                 feel free to reach out to me via email : 
              
//               <a href="qasimrabab021@gmail.com" className='pl-2 border-b'>qasimrabab021@gmail.com</a>
//             </p>

//             <div className='flex justify-center mt-8 space-x-6'>
//                 <a href="https://www.linkedin.com/in/rabab-qasim-32b189219/" target='_blank' rel='noopener noreferrer'
//                 className='contact-icon'
//                 aria-label ="visit my linkedin profile">
//                 <RiLinkedinBoxFill className="text-3xl" />
//                  </a>

//                 <a href="https://www.linkedin.com/in/rabab-qasim-32b189219/" target='_blank' rel='noopener noreferrer'
//                 className='contact-icon'
//                 aria-label ="visit my linkedin profile">
//                 <RiLinkedinBoxFill className="text-3xl" />
//                  </a>
                 
//                 <a href="https://www.linkedin.com/in/rabab-qasim-32b189219/" target='_blank' rel='noopener noreferrer'
//                 className='contact-icon'
//                 aria-label ="visit my linkedin profile">
//                 <RiLinkedinBoxFill className="text-3xl" />
//                  </a>
//             </div>

//         </div>
      
//     </section>
//   )
// }

// export default Contact

import { useRef } from 'react';
import { RiLinkedinBoxFill,RiGithubFill , RiInstagramFill, RiBehanceFill } from 'react-icons/ri'; // Importing icons from react-icons

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <section className='py-16' id='contact' ref={contactRef}>
      <div className='px-4 text-center'>
        <h2 className='mb-8 text-3xl font-medium lg:text-4xl'>Contact</h2>
        <p className='mb-4 text-lg lg:text-xl'>
          Feel free to reach out to me via email:
          <a href="mailto:qasimrabab021@gmail.com" className='pl-2 border-b'>
            qasimrabab021@gmail.com
          </a>
        </p>

        <div className='flex justify-center mt-8 space-x-6'>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/rabab-qasim-32b189219/"
            target='_blank'
            rel='noopener noreferrer'
            className='contact-icon'
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/rabix_01?igsh=MXdvZTI1eDlhaTZ6aQ=="
            target='_blank'
            rel='noopener noreferrer'
            className='contact-icon'
            aria-label="Visit my Instagram profile"
          >
            <RiInstagramFill className="text-3xl" />
          </a>
          {/* github Icon */}
          <a
            href="https://github.com/rabab003"
            target='_blank'
            rel='noopener noreferrer'
            className='contact-icon'
            aria-label="Visit my Instagram profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>

          {/* Behance Icon */}
          <a
            href="https://www.behance.net/rababqasim"
            target='_blank'
            rel='noopener noreferrer'
            className='contact-icon'
            aria-label="Visit my Behance profile"
          >
            <RiBehanceFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
