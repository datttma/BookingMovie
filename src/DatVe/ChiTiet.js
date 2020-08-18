import React, { Component } from "react";
import {connect} from 'react-redux';
 class ChiTiet extends Component {
   renderTable=()=>{
    return this.props.gheDangchon.map((item,index)=>{
        return  <tr>
        <th>{item.soGhe}</th>
        <th>{item.gia}</th>
        <th>X</th>
      </tr>
    });
   }
   tinhtien=(ghedat)=>{
    let tien =0;
    ghedat.map((item)=>{
      tien+=item.gia;
    });
    return tien;
   }
  render() {
    return (
      <div className="col-4">
        <h3 className="display-5">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div className="row mt-5">
          <div className="col-1 gheDuocChon"></div>
          <div className="col-10 ">Ghế đã đặt</div>
        </div>
        <div className="row">
          <div className="col-1 gheDangChon"></div>
          <div className="col-10">Ghế đang đặt</div>
        </div>
        <div className="row">
          <div className="col-1 ghe"></div>
          <div className="col-10">Ghế chưa đặt</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hàng</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
            <tr>
              <td>Tổng</td>
    <td>{this.tinhtien(this.props.gheDangchon)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  gheDangchon : state.datVeReducer.gheDangchon,
});
export default connect(mapStateToProps)(ChiTiet);