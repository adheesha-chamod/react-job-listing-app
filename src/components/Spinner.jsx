import MoonLoader from "react-spinners/MoonLoader";
import PropTypes from "prop-types";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return (
    <MoonLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool,
};

export default Spinner;
