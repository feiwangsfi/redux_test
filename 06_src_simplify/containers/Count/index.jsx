// import CountUI from '../../components/Count'
// import store from '../../redux/store'
import {createIncrementAction,createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
import {connect} from 'react-redux'

// const mapStateToProps= (state) =>({count:state})


// const mapDispatchToProps = (dispatch) => (
//     {
//         jia:(number)=>dispatch(createIncrementAction(number)),
//         jian:(number)=>dispatch(createDecrementAction(number)),
//         jiaAsync:(number, time)=>dispatch(createIncrementAsyncAction(number, time))
        
//     }
// )

import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
// import store from '../../redux/store'
//引入actionCreator，专门用于创建action对象
// import {
// 	createIncrementAction,
// 	createDecrementAction,
// 	createIncrementAsyncAction
// } from '../../redux/count_action'

class Count extends Component {

	state = {carName:'奔驰c63'}

	/* componentDidMount(){
		//检测redux中状态的变化，只要变化，就调用render
		store.subscribe(()=>{
			this.setState({})
		})
	} */

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
        this.props.jia(value*1)
		// store.dispatch(createIncrementAction(value*1))
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
        this.props.jian(value*1)
		// store.dispatch(createDecrementAction(value*1))
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		// const count = store.getState()
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		// setTimeout(()=>{
			// store.dispatch(createIncrementAsyncAction(value*1,500))
		// },500)
        this.props.jiaAsync(value*1,500)
	}

	render() {
		return (
			<div>
				<h1>当前求和: {this.props.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}


export default connect(
    (state) =>({count:state}),
    // (dispatch) => (
    //     {
    //         jia:(number)=>dispatch(createIncrementAction(number)),
    //         jian:(number)=>dispatch(createDecrementAction(number)),
    //         jiaAsync:(number, time)=>dispatch(createIncrementAsyncAction(number, time))
            
    //     }
    // )
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(Count)

