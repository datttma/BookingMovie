import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachGhe extends Component {
  renderHang = () => {
    let Hang = this.props.data;
    console.log("hang",Hang);
    return Hang.map((item, index) => {
      return <p key={index}>{item.hang}</p>;
    });
  };
  renderGhe = () => {
    let ghe = this.props.data;
    return ghe.map((item, index) => {
      return item.danhSachGhe.map((ghe, id) => {
        return (
          <div className="col-1 mt-2 "key={id}>
            <div className="ghe text-center" onClick={()=>{this.props.dispatch({type:"BOOKING",ghe})}}>{ghe.soGhe}</div>
          </div>
        );
      });
    });
  };
  renderHetLuon=()=>{
    let data = this.props.data;
    // for(let props in data){
    //   // console.log(data[props]);
    //   // console.log(Object.entries(data[props]));
    //   Object.entries(data[props]).map((item,index)=>{
    //       console.log(item[index]);
    //   })
  // }
  data.map((item,index)=>{
    // console.log(item);
    for(let props in item){
      // console.log(item[props]);
    }
  })
  }
  render() {
    return (
      <div className="col-8">
        <h3 className="display-5 text-center ">ĐẶT VÉ XEM PHIM</h3>
        <div className="screen"></div>
        <div className="mt-2">
          <div className="row">
            {this.renderHetLuon()}
                <div className="col-1">A</div>
                <div className ="col-11">
                  <div className="row">
                    <div className="col-1">1</div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.datVeReducer.danhSachGhe,
});
export default connect(mapStateToProps)(DanhSachGhe);
