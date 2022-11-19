import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
class HomePage extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <HomeHeader />
                <div className="text-center">Hello world</div>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
