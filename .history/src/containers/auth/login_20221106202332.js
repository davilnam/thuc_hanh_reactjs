import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './login.scss';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService'
// import { userLoginSuccess } from '../../store/actions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnClick = async () => {
        let { username, password } = this.state;

        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(username, password);
            console.log(data);
            if (data.data && data.data.errCode !== 0) {
                this.setState({
                    errMessage: data.data.message
                })
            }
            if (data.data && data.data.errCode === 0) {
                this.props.userLoginSuccess(data.data.user);
                console.log("login success");
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
            console.log(e.response);
        }
        // this.setState({
        //   username: '',
        //   password: '',
        // })
    }

    handleOnClickIcon = () => {
        let isShowPassword = this.state.isShowPassword;
        this.setState({
            isShowPassword: !isShowPassword
        })
    }

    render() {
        let { isShowPassword } = this.state;
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>

                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserName(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                {isShowPassword === false ?
                                    <i className="fas fa-eye-slash icon-eye"
                                        onClick={() => this.handleOnClickIcon()}></i>
                                    :
                                    <i className="fas fa-eye icon-eye"
                                        onClick={() => this.handleOnClickIcon()}></i>
                                }
                            </div>
                        </div>
                        <div className='col-12' style={{ "color": "red" }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button
                                type='submit'
                                className='btn-login'
                                onClick={() => this.handleOnClick()}
                            >
                                Login
                            </button>
                        </div>


                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span>Or Login with:</span>
                        </div>
                        <div className='col-12 text-center social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
