const getData=()=>{
    const storedData=localStorage.getItem("job_application");
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}
const storeData=id=>{
    const storedData=getData();
    console.log(storedData);
    const exits=storedData.find(job=>job==id);
    console.log(exits);
    if(!exits){
        console.log("hello");
        storedData.push(id);
        localStorage.setItem("job_application",JSON.stringify(storedData));
    }
}
export  {getData,storeData};