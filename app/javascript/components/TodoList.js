import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Form from './Form'

const Name = styled.h1`
  color: #0000FF;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background: #FFFFFF;
  border: 4px solid #0000FF;
  padding: 0px 12px;
  width: 300px;
  height: 120px;
`;

class TodoList extends React.Component {
  render () {
    return (
      <Wrapper>
        <Form />
        <Button>
          <Name>
            {this.props.greeting}
          </Name>
        </Button>
      </Wrapper>
    );
  }
}

TodoList.propTypes = {
  greeting: PropTypes.string
};
export default TodoList
