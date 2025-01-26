import { useEffect, useState } from "react"
import Footer from "./components/footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  
  const [data, setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [showmodal,setShowmodal]=useState(false)

  function handleToggleModal(){
    setShowmodal(!showmodal)
  }

  useEffect(()=>{
    async function fetchAPIData() {
      const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
      const url= 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today=(new Date()).toDateString()
      const localkey= `NASA-${today}`
      if(localStorage.getItem(localkey)){
        const apiData= JSON.parse(localStorage.getItem(localkey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()
      try {
        const res=await fetch(url)
        const apiData=await res.json()
        localStorage.setItem(localkey,JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from cache today')
      }catch(err){
        console.log(err.message)
      }  
    }
    fetchAPIData()
  },[])

  return (
    <>
      {data ? (<Main data={data} />):(
        <div className="loadingState"><i className="fa-solid fa-gear"></i></div>
      )}
      {showmodal && (
        <SideBar data={data} handleToggleModal={handleToggleModal}/>
      )}
      { data && 
      (<Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
