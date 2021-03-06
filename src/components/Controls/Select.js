import React, {Component} from 'react';

class Select extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : props.value
        }
    }

    onChange(e){
        this.setState({
            value: e.target.value
        }, ()=> {
            this.props.onChange(this.state.value);
        });
    }

    render(){
        return(
            <div>
                <select className="form-control" onChange={this.onChange.bind(this)}>
                    <option value = "text"> Text </option>
                    <option value = "html"> Html </option>
                </select>    
            </div>
        )
    }
}

export default Select;