import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>
            khong tim thay du lieu
            <NavLink to={''}>tro ve</NavLink> trang chu!
        </h3>
      </div>
    )
  }
}
