import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import khamchuyenkhoa from '../../assets/khamchuyenkhoa.png'
import khamtuxa from '../../assets/khamtuxa.png'
import khamtongquat from '../../assets/khamtongquat.png'
import dichvuxetnghiem from '../../assets/dichvuxetnghiem.png'
import suckhoetinhthan from '../../assets/suckhoetinhthan.png'
import khamnhakhoa from '../../assets/khamnhakhoa.png'

class HomeHeader extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b>Chuyên khoa</b></div>
                                <div className='desc'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ sở y tế</b></div>
                                <div className='desc'>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Bác sĩ</b></div>
                                <div className='desc'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className='desc'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                Hỗ trợ
                            </div>
                            <div className='flag'>VN</div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='top-banner'>
                        <div className='title-banner'>
                            <div>NỀN TẢNG Y TẾ</div>
                            <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b>
                        </div>
                        <div className='search-banner'>
                            <div className='icon-search'>
                                <i class="fas fa-search"></i>
                            </div>
                            <div className='input-search'>
                                <input type='text' placeholder='Tìm phòng khám' />
                            </div>
                        </div>
                    </div>

                    <div className='bottom-banner'>
                        <div className='option'>
                            <div className='option-image'>
                                <img src={khamchuyenkhoa} alt='khamchuyenkhoa' />
                            </div>
                            <p>Khám chuyên khoa</p>
                        </div>
                        <div className='option'>
                            <div className='option-image'>
                                <img src={khamtuxa} alt='khamtuxa' />
                            </div>
                            <p>Khám từ xa</p>
                        </div>
                        <div className='option'>
                            <div className='option-image'>
                                <img src={khamtongquat} alt='khamtongquat' />
                            </div>
                            <p>Khám tổng quát</p>
                        </div>
                        <div className='option'>
                            <div className='option-image'>
                                <img src={dichvuxetnghiem} alt='dichvuxetnghiem' />
                            </div>
                            <p>Xét nghiệm y học</p>
                        </div>
                        <div className='option'>
                            <div className='option-image'>
                                <img src={suckhoetinhthan} alt='suckhoetinhthan' />
                            </div>
                            <p>Sức khỏe tinh thần</p>
                        </div>
                        <div className='option'>
                            <div className='option-image'>
                                <img src={khamnhakhoa} alt='khamnhakhoa' />
                            </div>
                            <p>Khám nha khoa</p>
                        </div>
                    </div>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
