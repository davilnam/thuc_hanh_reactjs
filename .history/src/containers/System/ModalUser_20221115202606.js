import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    componentDidMount() {
    }


    render() {
        console.log("check child props", this.props)
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
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Password:</label>
                            <input type='password' />
                        </div>
                        <div className='input-container'>
                            <label>First name:</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Last name:</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Address:</label>
                            <input type='text' />
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
