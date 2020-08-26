import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachGhe extends Component {
  renderHetLuon = () => {
    let data = this.props.data;
    let gheDangChon = this.props.gheDangChon;
    console.log(data);
    return data.map((item, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-1 ">
            <p className="firstChar">{item.hang}</p>
          </div>
          <div className="col-11">
            <div className="row">
              {item.danhSachGhe.map((ghe, index) => {
                let classGhe = item.hang === "" ? "rowNumber" : "ghe";
                let classGhee = ghe.daDat == true ? "gheDuocChon" : "";
                let classGheee = "";
                gheDangChon.map((dangChon, index) => {
                  // console.log(dangChon.soGhe);
                  if (dangChon.soGhe === ghe.soGhe) {
                    classGhee === "gheDangChon"
                      ? (classGheee = " ")
                      : (classGhe += " gheDangChon");
                  }
                });
                return (
                  <div
                    className={`col-1 ${classGhe} ${classGhee} ${classGheee}`}
                    key={index}
                    onClick={() => {
                      this.props.dispatch({ type: "BOOKING", ghe });
                    }}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
    // for(let props in data){
    //   // console.log(data[props]);
    //   // console.log(Object.entries(data[props]));
    //   Object.entries(data[props]).map((item,index)=>{
    //       console.log(item[index]);
    //   })
    // }
    data.map((item, index) => {
      // console.log(item);
      for (let props in item) {
        // console.log(item[props]);
      }
    });
  };
  render() {
    return (
      <div className="col-8">
        <h3 className="display-5 text-center ">ĐẶT VÉ XEM PHIM</h3>
        <div className="screen"></div>
        <div className="mt-2">{this.renderHetLuon()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.datVeReducer.danhSachGhe,
  gheDangChon: state.datVeReducer.gheDangchon,
});
export default connect(mapStateToProps)(DanhSachGhe);
