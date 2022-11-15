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
                className={"className"}
                size="lg"
            >
                <ModalHeader toggle={this.toggle}>Create a new user</ModalHeader>
                <ModalBody>
                    <div class="container pt-3">
                        <form action="/post-crud" method="POST">
                            <div class="form-row">
                                <div class="col-md-12">Create a new user:</div>
                                <div class="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="Email" name="email" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password" name="password" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>First name</label>
                                    <input type="text" class="form-control" name="firstName" placeholder="First name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" name="lastName" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control" name="address" placeholder="1234 Main St" />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Phone number</label>
                                    <input type="text" class="form-control" name="phoneNumber" />
                                </div>
                                <div class="form-group col-md-3">
                                    <label>Sex</label>
                                    <select name="gender" class="form-control">
                                        <option value="1" selected>Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label>Role</label>
                                    <select name="roleId" class="form-control">
                                        <option value="1" selected>Admin</option>
                                        <option value="2">Doctor</option>
                                        <option value="3">Patient</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
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
