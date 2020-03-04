import React from "react"
import PropTypes from "prop-types"
class TodoList extends React.Component {
  render () {
    return (
      <React.Fragment>
        Name: {this.props.name}
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  name: PropTypes.string
};
export default TodoList
