import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { URL_AUTH_GOOGLE, URL_API_LOGOUT} from "../constants";

import Payments from './Payments';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'still deciding';
            case false:
                return (
                    <li>
                        <a href={URL_AUTH_GOOGLE}>Login with Google</a>
                    </li>
                );
            default:
                return [
                    <li
                        style={{ margin : '5px' }}
                    >
                        <img src={this.props.auth.googlePhotoURL} alt="photoURL"/>
                    </li>,
                    <li key="1">
                        <a href={URL_API_LOGOUT}>Logout</a>
                    </li>,
                    <li
                        key="3"
                        style={{ margin : '0 10px'}}
                    >
                        Credits : {this.props.auth.credits}
                    </li>,
                    <li
                        key="2"
                        style={{ margin : '0 10px'}}
                    >
                        <Payments />
                    </li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                        style={{ margin : '0 20px'}}
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, null)(Header);