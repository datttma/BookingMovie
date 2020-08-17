import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachGhe from "./DanhSachGhe";
import ChiTiet from "./ChiTiet";
import "./style.css";
export default class DatVe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <DanhSachGhe />
          <ChiTiet />
        </div>
      </div>
    );
  }
}
