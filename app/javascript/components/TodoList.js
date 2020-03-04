import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Name = styled.h1`
  color: #0000FF;
`;

const Button = styled.button`
  background: #FFFFFF;
  text-align: center;
  border: 4px solid #0000FF;
  border-radius: 35px;
  padding: 0px 12px;
`;

class TodoList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button>
          <Name>
            {this.props.greeting}
          </Name>
        </Button>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  greeting: PropTypes.string
};
export default TodoList
