import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id: nanoid(), name, age}
        this.props.jiayiren(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        return (
            <div>
                <h2> This is Person component, the above number is {this.props.he} deploy on surge</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="input name" ></input>
                <input ref={c => this.ageNode = c} type="text" placeholder="input age" ></input>
                <button onClick={this.addPerson}>submit</button>
                <ul>
                    {

                        this.props.yiduiren.map((p)=>{
                            return <li key={p.id}>{p.name}-{p.age}</li>
                        })
                    }

                </ul>
            </div>
        )
    }
}

export default connect(
    state =>({yiduiren: state.rens, he:state.he}),
    {jiayiren: createAddPersonAction}
)(Person)
