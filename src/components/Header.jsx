import brainImage from '/src/assets/brain.png'
const Header = () => {
  return (
    <header className='max-w-screen-xl m-auto flex justify-between items-center py-4 md:px-12 px-4 sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-500'>
        <a href="/" className="flex md:gap-1 items-center ">
            <img src={brainImage} alt="logo image" className='lg:w-10 md:w-9 w-7 '/>
            <span className='font-bold text-slate-50 lg:text-3xl md:text-2xl text-xl font-mono'>Summify</span>
        </a>
        <button className='text-slate-50 hover:text-slate-900 md:text-base text-sm font-semibold md:py-2 py-1 md:px-4 px-2 rounded-xl bg-black hover:bg-slate-100'>Github</button>
    </header>
  )
}

export default Header