import { MdLocationOn } from 'react-icons/md';
import { TbZoomMoney } from "react-icons/tb";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact py-3 bg-base-100 shadow-xl">
            <figure className=' w-32'><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{job_title}</h2>
                <p className='text-start text-lg font-semibold'>{company_name}</p>
                <div className='flex flex-row justify-start'>
                    <button className='py-2 px-4 border-2 border-blue-800 rounded-3xl mr-3'>{remote_or_onsite}</button>
                    <button className='py-2 px-4 border-2 border-blue-800 rounded-3xl mr-3'>{job_type}</button>
                </div>
                <div className='flex flex-row justify-start text-sm font-semibold align-middle items-center'>
                    <MdLocationOn></MdLocationOn><p className='text-start'>{location}</p>
                    <TbZoomMoney></TbZoomMoney><p className='text-start'>{salary}</p>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${job.id}`}><button className="btn bg-[#7E90FE]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;