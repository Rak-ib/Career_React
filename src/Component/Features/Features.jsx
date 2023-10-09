import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Features = () => {
    const [jobs,setJobs]=useState([])
    const [dataLength,setDataLength]=useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <>
        <div className="grid grid-cols-2 gap-4 container mx-auto">
            
            {
                jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
            }
        </div>
        <div className={(jobs.length === dataLength)?"hidden":"my-3"} >
            <button className="btn btn-primary" onClick={()=>setDataLength(jobs.length)}> Show all</button>
        </div>
        <div className={(jobs.length != dataLength)? "hidden":"my-3"}>
            <button className="btn btn-primary" onClick={()=>setDataLength(4)}> Show less</button>
        </div>
        </>
    );
};

export default Features;