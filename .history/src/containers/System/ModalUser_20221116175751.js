import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        };
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    componentDidMount() {
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    handleAddNewUser = () => {

    }

    render() {
        console.log(this.state);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.toggle}
                className={"modal-user-container"}
                size="lg"
            >
                <ModalHeader toggle={this.toggle}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email:</label>
                            <input
                                type='text'
                                value={this.state.email}
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password:</label>
                            <input
                                type='password'
                                value={this.state.email}
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                            />
                        </div>
                        <div className='input-container'>
                            <label>First name:</label>
                            <input type='text'
                                onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last name:</label>
                            <input type='text'
                                onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Address:</label>
                            <input type='text'
                                onChange={(event) => this.handleOnChangeInput(event, "address")}
                            />
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleAddNewUser()}>Add new</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
