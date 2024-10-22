
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Recipe from './components/Recipe'
import Recipies from './components/Recipies'
import SideBar from './components/SideBar'

function App() {
  const [recipelist,setList]=useState([]);
  const handleRecipeList=(recipe)=>{
    const isExist=recipelist.find(existId=>recipe.recipe_id === existId.recipe_id)
    if(!isExist){
    setList([...recipelist, recipe])                
    }
    else{
      alert("Id already added")
    }
  }
  return (
    <div className='container mx-auto '>
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      <Recipe></Recipe>
      <section className='flex flex-col md:flex-row'>
        {/* 2 cart */}
        <Recipies handleRecipeList={handleRecipeList}></Recipies>
        {/* side bar */}
        <SideBar recipelist={recipelist}></SideBar>
      </section>
    </div>
  )
}

export default App
