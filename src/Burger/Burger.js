import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Burger.css';
class Burger extends Component {
    renderBreadMid = () => {
        let { burger } = this.props;
        // console.log(Burger);
        // render with object
        // let breadMid =[];
        // for (let thuocTinhBurger in burger){
        //     // console.log(burger[thuocTinhBurger]);
        //     for(let i =0;i<burger[thuocTinhBurger];i++){
        //         breadMid.push(<div key={i} className={thuocTinhBurger}></div>)
        //     }
        // }
        // return breadMid;
        // Dùng hàm Object.entries thằng này sẽ dùng để bóc tách các đối tượng thành mảng con --- 1 đối tượng được thể hiện dưới dạng mảng
        //    console.log( Object.entries(burger));--- mỗi thuộc tính sẽ trở thành 1 mảng
        return Object.entries(burger).map(([propsBurger, value], index) => {
            // để bóc tách thằng item ra thì mình dùng cách  [propsBurger ,Value] -- ví dụ salad sẽ là propsBurger  và 1 sẽ là value 
            // console.log(propsBurger,value);
            //chạy vòng lặp để sinh ra số lượng salad ... tương ứng với value
            let breadMid = [];
            for (let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }
            return breadMid;
        })


    }
    renderTable = () => {
        let { menu,burger } = this.props;
        return Object.entries(menu).map(([props, value], index) => {
            return <tr key={index}>
                <td>{props}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>{ this.props.dispatch({
                        type:"TANG_GIAM",
                        propsBurger : props,
                        amount :1

                })}}>+</button>
                {burger[props]} 
                <button className="btn btn-danger" onClick={()=>{ this.props.dispatch({
                        type:"TANG_GIAM",
                        propsBurger : props,
                        amount :-1

                })}}>-</button>
                 </td>
                <td>{value}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <h3 >Burger</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 >Cửa hàng Burger</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Thức Ăn</th>
                                    <th></th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>

                                <th>Thành tiền</th>
                                <th>{this.props.total}</th>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}
export default connect(mapStateToProps)(Burger);