const Header = () => {
  return (
 <div className="flex justify-between container mx-auto items-center pt-5">
    <h3 className="lg:text-3xl text-xl font-extrabold ">Recipe Calories</h3>
    <div className="hidden lg:block">
       <div className="flex justify-between gap-4">
       <p>Home</p>
       <p>Recipe</p>
       <p>About</p>
       <p>Search</p>
       </div>
       </div>
       <div className="flex">
        <input className="bg-slate-300 hidden lg:block border p-2 rounded-xl" type="text" placeholder="Search" />
        <button className="bg-green-500 rounded-full p-3">User</button>
        </div>                                                                                  
  </div>
);
};

export default Header;
