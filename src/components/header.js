import React, { Component } from 'react'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            keywords: ''
        }
    }

    inputChange(event) {
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    
    render() {
        
        return(
            <header>
                <div className="logo">Logo</div>
                <input type="text" className="form-control col-4 offset-4"
                    onChange={this.inputChange.bind(this)}
                />
            </header>
        )
    }
}

export default Header