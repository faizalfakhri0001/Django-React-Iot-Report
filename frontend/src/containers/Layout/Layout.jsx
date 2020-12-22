import React from 'react';
import './Layout.css';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

// import Sidebar from "../../components/Sidebar/Sidebar";
import Sidebar2 from "../../components/Sidebar2/Sidebar2";

class Layout extends React.Component {
    render() {
        // const { authenticated } = this.props;
        return (
            <div>
                <Sidebar2 />
                <div className="home">
                    {this.props.children}
                </div >
                {/* Footer */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Layout)
);