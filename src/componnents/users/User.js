import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Repos } from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }



    render() {
        const {
            name,
            company,
            avatar_url, 
            location,
            bio,
            bblog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gist,
            hireable
        } = this.props.users

        const { loading } = this.props;

        if(loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">
                    Back to Serach
                </Link>
            </Fragment>
        )
    }
}

export default User
