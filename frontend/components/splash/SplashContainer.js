import { connect } from "react-redux";
import Splash from "./Splash";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

export default connect(mapStateToProps, null)(Splash)