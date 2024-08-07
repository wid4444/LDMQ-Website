import { FaArrowRight } from "react-icons/fa";
import resume from '../assets/resume.pdf'

function Resume() {

    const openResume = () => {
        window.open(resume, '_blank');
      };


  return (
    <div id='resume' className=' max-w-[1040px] m-auto  pt-10  relative flex-column items-center justify-center h-auto w-full '>
        {/* <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300'>Resume</h1> */}
       {/* <div className='border flex flex-col justify-center h-auto w-full p-10'> */}
        {/* <div className='border flex justify-center h-auto w-full'> */}
    {/* <button className=' hover:transition-transform hover:-translate-y-1 hover:scale-110 w-40 bg-[#001b5e] text-gray-100 my-6 py-3 border-solid border-1 border-sky-500 shadow-inner shadow-sky-300  rounded-3xl dark:bg-green-600 dark:text-gray-200 dark:shadow-gray-50' onClick={openResume}>
      View Full Resume 
    </button> */}
    <button className='w-52 flex justify-center align-middle font-bold hover:ml-6 hover:transition-transform-border ease-in-out hover:-translate-y-1 hover:scale-125 text-lg text-[#001b5e] py-3 border-solid hover:border-b border-[#ff6700] dark:border-[#ff3cc7] shadow-sky-300  dark:text-green-500 dark:hover:text-gray-200 dark:shadow-gray-50' onClick={openResume}>
      View Full Resume <FaArrowRight size={20} className='pt-1 ml-2 '/>
    </button>

    </div>
  )
}

export default Resume