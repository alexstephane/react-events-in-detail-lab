// Code CoordinatesButton Component Here

import React, { Component } from "react"


export default class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        let coord = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(coord)
    }
  
    render() {
      return (
        <div>
                <button onClick={this.handleClick}>Coord</button>
            </div>
      );
    }
  }