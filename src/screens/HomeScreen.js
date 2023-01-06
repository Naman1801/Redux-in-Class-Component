import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Increment,Decrement } from '../redux/action/action'
import {connect} from 'react-redux'
import Operation from '../redux/reducer/operation'
const mapStateToProps=(props)=>{
    return{
        // inc:props.increment,
        // dec:props.decrement,
        op:props.operation.count
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        increment:()=>dispatch(Increment()),
        decrement:()=>dispatch(Decrement()),
        // operation:()=>dispatch(Operation())
    }
}



export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button title="Increment" onPress={()=>this.props.increment(this.props.op+1)} />
        <Text> {this.props.op} </Text>
        <Button title="Decrement" onPress={()=>this.props.decrement(this.props.op-1)} />
        <Text> {this.props.op} </Text>
      </View>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
