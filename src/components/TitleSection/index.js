import PropTypes from "prop-types";

const TitleSection = ({ children, centerText }) => (
  <div className="mt-8 mb-12">
    <h1
      className={`text-sky-300 font-semibold text-3xl lg:text-4xl selection:bg-teal-500 selection:text-teal-900 ${
        centerText ? "text-center" : ""
      }`}
    >
      {children}
    </h1>
  </div>
);

TitleSection.propTypes = {
  centerText: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TitleSection;
