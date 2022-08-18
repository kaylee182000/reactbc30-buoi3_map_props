import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
  render() {
    return (
      <div className='card'>
          <img src="https://picsum.photos/200/200" alt=".." className='w-100' />
          <div className="card-body">
              <p>Iphone</p>
              <p>1000</p>
              <button className='btn btn-success'>Them gio hang</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(SanPhamRedux)