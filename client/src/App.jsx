import {Main, Navbar, Sidebar,} from "./components"

const App = () => {
    return (
        <div className=" flex w-full h-screen bg-slate-800">
              <Sidebar/>
            <div className="h-screen w-[82%]">
               <Navbar/>
                <div className="main"></div>
            </div>
        </div>
    )
}

export default App

