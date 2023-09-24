 'use client'
 import React , {useState} from "react"



const page = () => {

  const [title , setTitle] = useState()
  const [desc , setDesc] = useState()
  const [mainTask ,  setMainTask ] = useState([])


  const deleteHandle = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i , 1)
    setMainTask(copyTask)
    console.log('delete')
  }
  
  const submitHandeler = (e)=>{
 if (!title ) {
  e.preventDefault()
  alert("Title cannot be empty")
 } else {
  e.preventDefault()
  setMainTask([...mainTask ,{title, desc}]);
  setTitle("");
  setDesc("");
  console.log(mainTask);
 }
  }

  let data = <h2>NO TASK</h2>

  data = mainTask.map((t,i)=>{
    return(
      <li className=" mb-2">
      <div className="flex flex-wrap gap-[20px] bg-slate-200 p-[20px] justify-between items-center rounded-[10px]">
        <h5 className=" font-bold text-[20px]">{t.title}</h5>
        <p className=" text-[20px] ">{t.desc}</p>
        <button className=" bg-red-500 p-[10px] rounded-md " onClick={()=>{deleteHandle(i)}}>Delete</button>
      </div>
    </li>
    )
   })
   
  

  return (
    <>
  <div className="bg-black text-gray-50 p-4 text-center">
    <h1 className="text-6xl">Todo List</h1>
  </div>
  <form  className="flex justify-center p-10 gap-[50px] flex-wrap" onSubmit={submitHandeler}>
    <input className="text-4xl  outline-none p-2" type="text" value={title} placeholder="Enter title" 
     onChange={(e)=>{ setTitle(e.target.value); } } />
    <input className="text-4xl border-3 border-black outline-none p-2" type="text" placeholder="Enter title" onChange={(e)=>{ setDesc(e.target.value);  } } value={desc} />
    <button className="bg-black text-white text-2xl p-4" type="submit">Submit</button>
  </form>
  <div className="p-[50px]">
   <ul>
    {data}
   </ul>
  </div>
    </>
  )
}

export default page
