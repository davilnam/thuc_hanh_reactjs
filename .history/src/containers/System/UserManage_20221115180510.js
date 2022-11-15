import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';
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
        let response = await getAllUsers('All');
        console.log(response);
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
            isOpenModal: !this.state.isOpenModal,
        })
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
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
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>

                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'
                                        >
                                            <i class="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className='btn-delete'>
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        }


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
