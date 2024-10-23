
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Recipe from './components/Recipe'
import Recipies from './components/Recipies'
import SideBar from './components/SideBar'

function App() {
  const [recipelist,setList]=useState([]);
  const [prepareRecipe,setPrepareRecipies]=useState([]);
  const[totalTime,setTime]=useState(0);
  const [totalCalori,setCalories]=useState(0);

  const handleRecipeList=(recipe)=>{
    const isExist=recipelist.find(existId=>recipe.recipe_id === existId.recipe_id)
    if(!isExist){
    setList([...recipelist, recipe])                
    }
    else{
      alert("Id already added")
    }
  }
  const handlePrepareRecipe=(id)=>{
    const deletedRecipie=recipelist.find(recipe=>recipe.recipe_id=== id)
    
    const updatedToTableTwo=recipelist.filter(recipe=> recipe.recipe_id !== id)
    setList(updatedToTableTwo)
    setPrepareRecipies([...prepareRecipe,deletedRecipie])
  }

  const Total=(time,calori)=>{
    setTime(totalTime+time);
    setCalories(totalCalori+calori)
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
        <SideBar recipelist={recipelist}
         handlePrepareRecipe={handlePrepareRecipe} 
         prepareRecipe={prepareRecipe}
         TotalTimeCalory={Total}
         totalTime={totalTime}
         totalCalori={totalCalori}
         ></SideBar>
      </section>
    </div>
  )
}

export default App
