
import { useEffect } from "react";
import { useState } from "react";

const Recipies = ({handleRecipeList}) => {
   const [recipies,setRecipies]=useState([]);
   useEffect(()=>{
        fetch("/data.json")
      .then(res => res.json())
      .then(data=>setRecipies(data))                       
   },[])     

  return (
    <div className="md:w-2/3 border border-green-400">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
         {
           recipies.map(recipe=>(
 <div key={recipe.recipe_id} className="card rounded-xl  w-96 shadow-md">
  <figure className="py-4">
    <img className="w-5/6 h-[220px] mx-auto"
      src={recipe.recipe_image}
      alt="Shoes" />
  </figure>
  <div className="px-6">
    <h2 className="card-title text-2xl font-bold my-4">{recipe.recipe_name}</h2>
    <p>{recipe.short_description}</p>
    <p className="border-b-2 my-3"></p>
    <h3 className="text-2xl font-bold">Ingredients: {recipe.ingredients.length} </h3>
    <ul>
      {
        recipe.ingredients.map((item,idx)=><li key={idx}>.  {item}</li>)                      
      }                        
    </ul>
    <p className="border-b-2 my-3"></p>
    <div className="flex gap-5">
       <p><i className="fa-regular fa-clock mr-2"></i>{recipe.preparing_time} Minute </p>                       
       <p><i className="fa-solid fa-fire mr-2"></i>{recipe.calories}</p>                       
    </div>
    <div className="my-4 card-actions justify-end">
      <button onClick={()=>handleRecipeList(recipe)} className="btn p-3 rounded-full border bg-green-500">Want To Cook</button>
    </div>
  </div>
</div>              
           ))                   
         }                     
      </div>                                                                                     
  </div>
  );
};

export default Recipies;