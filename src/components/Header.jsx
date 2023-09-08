import brainImage from '/src/assets/brain.png'
const Header = () => {
  return (
    <header className='max-w-screen-xl m-auto flex justify-between items-center py-4 px-12 '>
        <a href="/" className="flex gap-1 items-center ">
            <img src={brainImage} alt="logo image" className='w-10 '/>
            <span className='font-bold text-slate-50 text-3xl font-mono'>Summify</span>
        </a>
        <button className='text-slate-50 hover:text-slate-900 text-base font-semibold py-2 px-4 rounded-2xl bg-black hover:bg-slate-100'>Github</button>
    </header>
  )
}

export default Header