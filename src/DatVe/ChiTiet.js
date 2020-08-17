import React, { Component } from "react";

export default class ChiTiet extends Component {
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
            <tr>
              <td scope="row">a1</td>
              <td>222</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Tổng</td>
              <td>12</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
