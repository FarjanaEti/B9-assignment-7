
const SideBar = ({recipelist,handlePrepareRecipe,
  prepareRecipe,TotalTimeCalory,totalTime, totalCalori
    }) => {
  console.log(recipelist)
  return (
  <div className="md:w-1/3 border rounded-2xl border-red-400 p-2">
 <h1 className="text-center text-2xl font-bold">Want to Cook:{recipelist.length}</h1>    
 <p className="border-b-2 my-4"></p>  
 {/* Table 1 */}
 <div className="overflow-x-auto">
  <table className="table-auto w-full">
    {/* head */}
    <thead>
      <tr className="">
        <th></th>
        <th>Name</th>
        <th>time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipelist.map((recipee,index)=>(
        <tr className="border-b" key={index}>
        <th>{index+1}</th>
        <th>{recipee.recipe_name}</th>
        <th>{recipee.preparing_time} Minute</th>
        <th>{recipee.calories} Calories</th>
        <th><button onClick={()=>
        {handlePrepareRecipe(recipee.recipe_id) 
          TotalTimeCalory(recipee.preparing_time,recipee.calories)}}
         className="bg-green-600 rounded-3xl p-2 my-2">Preparing</button> </th>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>  

    {/* Table 2  */}
    <div className="mt-5">
      <h3 className="text-2xl font-bold text-center">Currently cooking:{prepareRecipe.length} </h3>

      <p className="border-b-2 my-4"></p>  
 {/* Table */}
 <div className="overflow-x-auto bg-slate-100">
  <table className="table-auto w-full">
    {/* head */}
    <thead>
      <tr className="">
        <th></th>
        <th>Name</th>
        <th>time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        prepareRecipe.map((recipee,index)=>(
        <tr className="border-b-4" key={index}>
        <th>{recipee.recipe_id}</th>
        <th>{recipee.recipe_name}</th>
        <th>{recipee.preparing_time} Minute</th>
        <th>{recipee.calories} calories</th>
      </tr>
        ))
      }
     
    </tbody>
    <tr className="mt-5">
        <td></td>
        <td></td>
        <td>Total Time={totalTime}</td>
        <td>Total Calori={totalCalori}</td>
      </tr>
  </table>
</div>
    </div>
   </div>
 );
};

export default SideBar;