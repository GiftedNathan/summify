import Article from "./components/Article"
import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    // <main className="bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] h-screen">
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen font-mono">
      <Header />
      <Hero />
      <Article />
    </main>
  )
}

export default App
