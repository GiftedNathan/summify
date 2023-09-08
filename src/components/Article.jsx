import linkImage from '/src/assets/link1.png'
import enterImage from '/src/assets/enter.png'
import copyLinkImage from '/src/assets/copy-link.png'
import copyTextImage from '/src/assets/copy-text.png'

const Article = () => {
  return (
    <section className="max-w-screen-md m-auto mt-8 p-4">
        <div className="flex border-2 rounded-xl shadow-xl">
            <img src={linkImage} alt="link image" className='w-12 mr-1' />
            <input type="text" className='flex-1 bg-blue-200 px-3 border-none outline-none font-semibold ' />
            <button className='w-12'>
                <img src={enterImage} alt="" />
            </button>
        </div>
        
        <div className="flex gap-5 items-center justify-center mt-6 pr-2">
            <button className='flex gap-2 items-center text-slate-800 capitalize hover:text-slate-900 text-base font-semibold py-2 px-4 rounded-2xl hover:bg-slate-500 bg-slate-100'>
                <img src={copyLinkImage} alt="" className='w-8' />
                copy link
            </button>
            <button className='flex gap-2 items-center text-slate-200 capitalize hover:text-slate-900 text-base font-semibold py-2 px-4 rounded-2xl bg-black hover:bg-slate-100'>
                <img src={copyTextImage} alt="" className='w-8' />
                copy text
            </button>
        </div>
        <div className="bg-slate-100 opacity-95 shadow my-12 p-2 rounded-xl">
            <p className=''>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sunt, libero quos praesentium
                 dicta maiores reiciendis voluptatum deleniti
                  iste illo saepe vitae quia exercitationem 
                  aut accusamus debitis ex, recusandae 
                  cupiditate laboriosam.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sunt, libero quos praesentium
                 
            </p>
        </div>
    </section>
  )
}

export default Article