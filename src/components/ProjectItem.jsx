import Popup from "./Popup"

const ProjectItem = ({img, title, link, github, skills, libraries, paper, wireframe, description, password }) => {
  return (
   
    <div className='relative flex items-center align-middle justify-center h-auto w-full max-w-md hover:shadow-md hover:shadow-gray-400 rounded-2xl group hover:bg-gradient-to-t from-gray-300 to-violet-300  dark:hover:bg-gradient-to-t dark:from-cyan-950 dark:to-violet-950 '>
        <img src={img} alt="/" className='rounded-xl justify-center align-middle group-hover:opacity-10 w-full max-w-md'/>
        <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-md'>
            <h3 className=' w-full mt-8 pb-4 lg:text-xl xsm:text-sm font-bold tracking-wider text-center text-[#001b5e] dark:text-gray-300'>
                {title}
            </h3>
            <p className='flex justify-center align-middle pt-2 text-white text-center ' >{libraries}</p>
            
<div className= 'w-full flex items-center justify-center space-x-2'>
            {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <p className='hover:transition-transform hover:-translate-y-1 hover:scale-110 text-center py-2 px-4 hover:border-green-50 hover:border-solid hover:border hover:shadow-inner dark:shadow-green-200 hover:shadow-fuchsia-200 rounded-3xl hover:bg-purple-700 hover:dark:bg-green-600 text-gray-800 hover:text-gray-100 dark:text-gray-100 cursor-pointer text-md'>Web</p>
            </a>
            )}
            {wireframe && (
            <a href={wireframe} target="_blank" rel="noopener noreferrer">
                <p className='hover:transition-transform hover:-translate-y-1 hover:scale-110 text-center py-2 px-4 hover:border-green-50 hover:border-solid hover:border hover:shadow-inner dark:shadow-green-200 hover:shadow-fuchsia-200 rounded-3xl hover:bg-purple-700 hover:dark:bg-green-600 text-gray-800 hover:text-gray-100 dark:text-gray-100 cursor-pointer text-md'>Wireframe</p>
            </a>
            )}
            {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
                <p className='hover:transition-transform hover:-translate-y-1 hover:scale-110 text-center py-2 px-4 hover:border-green-50 hover:border-solid hover:border hover:shadow-inner dark:shadow-green-200 hover:shadow-fuchsia-200 rounded-3xl hover:bg-purple-700 hover:dark:bg-green-600 text-gray-800 hover:text-gray-100 dark:text-gray-100 cursor-pointer text-md'>Repo</p>
            </a>
            )}
            
             {paper && (
            <a href={paper} target="_blank" rel="noopener noreferrer">
                <p className='hover:transition-transform hover:-translate-y-1 hover:scale-110 text-center py-2 px-4 hover:border-green-50 hover:border-solid hover:border hover:shadow-inner dark:shadow-green-200 hover:shadow-fuchsia-200 rounded-3xl hover:bg-purple-700 hover:dark:bg-green-600 text-gray-800 hover:text-gray-100 dark:text-gray-100 cursor-pointer text-md'>Publication</p>
            </a>
            )}
            </div>
            <p className='w-screen flex justify-center align-middle pb-4 pt-2 text-white text-center max-w-md ' >{skills}</p>

            <div>
            <p className='pb-4 text-sm tracking-wider text-center text-[#001b5e] dark:text-gray-300 ease-in-out '>
                {description}
                
            </p>
            <p className='mt-5 pb-4 tracking-wider text-center text-[#001b5e] dark:text-gray-300'>
                {password}
                
            </p>
            </div>
           

            
           
            
        </div>
    </div>
   
  )
}

export default ProjectItem