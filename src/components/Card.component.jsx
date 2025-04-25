import { useNavigate } from "react-router-dom"


function Card ({data,name}){
    const Navigate = useNavigate()
    
    const CourseDetailspage = (id)=>{
       Navigate(`/courses/${id}`)
    }
    
   
    return (
        <>
        <div onClick={()=>{CourseDetailspage(data._id)}} className="w-3xs h-75 px-2 my-3 mx-3 py-2 shadow-xl rounded-xl ">
            <div className=" rounded-xl overflow-hidden ">
            <img className="object-cover w-3xs h-40" src={data?.thumbnail} alt="" />
            </div>
            
                <div className="text-base/6 my-1 px-2 py-1 ">
                    <h1 className="text-lg leading-none">{data.courseName} </h1>
                    <p className="text-base/6">price:{data.price}</p>
                    <p className="leading-none">category:{data.category}</p>
                    <div className="flex gap-3 contant-center my-2">
                    <img className="w-10 h-10 border-1 object-contain  rounded-full" src={data.educator.profileImage} alt="" />
                    <p className="text-base/6 py-1 text-xl">{data.educator.username}</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}


function Cards({data}){
    
    return(
        <>
        <div className="flex flex-wrap justify-evenly ">
            {
           data.data?
           (data.data.map((data,index)=>
               <Card data={data} />
        )) :
            (<h1>loading....</h1>)
            }
        
            
        </div>
        </>
    )
}

export default Cards