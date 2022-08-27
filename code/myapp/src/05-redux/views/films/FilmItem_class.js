import React, { Component } from 'react'
import withRouter from '../../components/withRouter'

class FilmItem extends Component {
    render() {
        // console.log(this.props)
        return (
            <li onClick={() => this.handleClick(this.props.filmId)}>
                {this.props.name}
            </li>
        )
    }

    handleClick(id) {
        // console.log(id)
        this.props.history.push(`/detail/${id}`)
    }
}

export default withRouter(FilmItem)