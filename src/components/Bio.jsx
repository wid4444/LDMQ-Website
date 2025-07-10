import danny from '../assets/danny.jpg'

function Bio() {
  return (
    <div id='bio' className='max-w-[1040px] m-auto md:pl-20 p-4 pb-30 py-16 relative flex-column items-center justify-center h-auto w-full'>
                  {/* <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300'>Bio</h1> */}
        <div className='flex justify-center h-auto w-full p-10'>
        <img src={danny} alt="" className='relative flex items-center justify-center h-auto w-full shadow-2xl shadow-gray-400 hover:transition-transform hover:-translate-y-1 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-md hover:shadow-gray-400 rounded-2xl group' style={{borderRadius:'50%', width:"300px", }}/>
        </div>
        <div>
        <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>Hi there! I'm Danny.</p>
        <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>Back in 2022, I made the exciting decision to dive into the world of coding and web development through Tech Elevator. Since then, I've had the incredible opportunity to craft software solutions for diverse clients, including non-profits, artists, and small corporation.</p>
        <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>These days, my primary focus revolves around creating user-friendly interfaces for our valued customers at Tech Impact. I'm particularly drawn to the intersection of design and engineering, where I strive to build software that not only looks good but also performs seamlessly behind the scenes.</p>
        <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'> My tech stack includes a blend of frontend and backend technologies like React.js, Vue.js, Spring Boot, and UI/UX design tools such as Figma and Adobe XD. Leveraging languages like Java, HTML, CSS, and JavaScript, alongside frameworks like Bootstrap and Tailwind, and libraries for visualizations like Mapbox and Recharts.</p>
        <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>When I'm not at my computer, you'll often find me in my woodworking workshop, enjoying quality time with my wife and our furry companion Lilly, tackling various projects around the house, or watching anime.</p>
        {/* <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>With my attention to detail, creativity, and communication I like to create responsive, and user-friendly application ideas. I am always interested in learning new languages and frameworks, improving my skills, and making contributions to society.</p> */}
        </div>

    </div>
  )
}

export default Bio