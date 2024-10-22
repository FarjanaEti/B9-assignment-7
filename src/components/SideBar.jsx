
const SideBar = ({recipelist}) => {
  return (
  <div className="md:w-1/3 border border-red-400">
       <h1 className="text-center text-2xl font-bold">Want to Cook:{recipelist.length}</h1>                                                                                   
   </div>
 );
};

export default SideBar;