import getPoke from "../actions";
import { connect } from "react-redux";
import { SelectComp } from "../components/SelectComp";
export const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changePoke: (value) => {
      dispatch(getPoke(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectComp);
