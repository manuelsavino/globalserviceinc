import React, { Component } from "react"
import styled from "styled-components"

const HeroDiv = styled.div`
  background: url(${props => props.image}) center;
  background-attachment: fixed;
  background-size: cover;
  min-height: ${props => props.height};
  width: 100%;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    opacity: 0.75;
    top: 0;
    left: 0;
    background: ${props => props.gradient};
    width: 100%;
    height: 100%;
  }
  &::after {
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    background-size: px;
    top: 0;
    left: 0;
    background: url(${props => props.pattern});
  }
`

class Hero extends Component {
  render() {
    return (
      <HeroDiv
        height={this.props.height}
        image={this.props.image}
        pattern={this.props.pattern}
        gradient={this.props.gradient}
      >
        {this.props.children}
      </HeroDiv>
    )
  }
}

export default Hero
