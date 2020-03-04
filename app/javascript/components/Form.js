import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Input = styled.input`
  height: 22px;
  padding: 10px;
  width: 176px;
  border-radius: 10px;
  border: 3px solid #386cfc;
`;
const InputSubmit = styled.input`
  height: 44px;
  width: 84px;
  border: none;
  border-radius: 10px;
  color: #1b1c21;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

class Form extends React.Component {
  render () {
    return (
      <Wrapper>
        <form>
          <label>
            <Input type="text" name="name" placeholder="Enter your name" />
          </label>
          <p>
            <InputSubmit type="submit" value="Submit" />
          </p>
        </form>
      </Wrapper>
    );
  }
}

export default Form
