import React from 'react'
import PropTypes from 'prop-types'

const Separator = ({ height = 10 }) => {
  const style = { height, width: '100%' }

  return (<div style={style} />)
}

Separator.propTypes = {
  height: PropTypes.number,
}

export default Separator