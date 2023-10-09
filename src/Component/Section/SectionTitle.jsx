
import PropTypes from 'prop-types';
const SectionTitle = ({title,sub_title}) => {
    return (
        <div className="text-center mx-auto px-auto">
            <h2 className="text-5xl font-bold mb-3  ">{title}</h2>
            <h2 className="text-sm font-semibold">{sub_title}</h2>
        </div>
    );
};
SectionTitle.propTypes={
    title:PropTypes.string,
    sub_title:PropTypes.string,
}
export default SectionTitle;