import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUser } from '../../services/userService';
import './UserManage.scss';
import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('All');
        if (response && response.data.errCode === 0) {
            this.setState({
                arrUsers: response.data.users
            })
        }
    }
    /**
     * Lifecycle
     * Run component:
     * Đầu tiên chạy contructor -> init state
     * Sau khi render lần đầu xong thì hàm componentDidMount() sẽ chạy
     * khi state cập nhật thì component sẽ tự động render lại
     */

    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    createNewUser = async (dataNewUser) => {
        console.log(dataNewUser);
        let response = await createNewUser(dataNewUser);
        console.log("check response", response);
        if (response && response.data.errCode === 0) {
            let arrNewUsers = this.state.arrUsers;
            arrNewUsers = { ...arrNewUsers, dataNewUser }
            this.setState({
                arrUsers: arrNewUsers
            })
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleUserModal}
                    newUser={this.createNewUser}
                />
                <div className='title text-center mb-3'>MANAGE USERS WITH NAM</div>
                <div className='m-2'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    >

                        Add new users
                    </button>
                </div>
                <div className='users-table mx-2'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers && arrUsers.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className='btn-delete'>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
