import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeData } from "../Utilities/Utilities";

const JobDetails = () => {
    const jobs=useLoaderData();
    const {user}=useParams();// accha ei useParam hook use kora jibo only jodi path="/something" a colon thake . Like path:"/:kfjkdfd"
                             // and ei kfjkdfd nam dui palcei same hoite hobe
    const job=jobs.find(Job=>Job.id==user)
    const {id}=job;
    const notify = () => {
        storeData(id);
        toast("Applied for the job")}
    console.log(job);
    return (
        <>
        <div className="grid grid-cols-3 container text-center justify-between my-32 border-2 border-blue-800 rounded-3xl mx-auto">
            <div className="col-span-2">{job.job_title}</div>
            <div className="col-span-1 flex flex-col gap-4 p-2">Job Description 
            <button className="btn btn-primary rounded-full" onClick={notify}>Apply</button>
            <ToastContainer />
            </div>
        </div>
        </>
    );
};

export default JobDetails;