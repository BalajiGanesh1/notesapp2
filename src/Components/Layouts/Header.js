import React, { Component } from 'react'
export class Header extends Component {
  render() {
      const headerStyle={
          fontfamily:'Sans-serif',
          size: '30px',
          color: 'black',
          width: '100%',
          height:'10%',
          textAlign: 'center',
          backgroundColor: 'lightyellow',
          padding: '10px'
      }
    return (
      <div>
      
        <h1  style={headerStyle}>NOTES-APP</h1>
      
        
      </div>
    )
  }
}

export default Header
