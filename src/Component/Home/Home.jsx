import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import Features from "../Features/Features";
import SectionTitle from "../Section/SectionTitle";


const Home = () => {
    return (
        <div className='text-center min-h-[calc(100vh-263px)]'>
            <Bannar></Bannar>
            <SectionTitle title={'Job Category List'} sub_title={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionTitle>
            <Category></Category>
            <SectionTitle title={'Featured Jobs'} sub_title={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionTitle>
            <Features></Features>
        </div>

    );
};

export default Home;