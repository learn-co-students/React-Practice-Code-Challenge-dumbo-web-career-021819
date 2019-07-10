import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.getMoreSushi()}>
            More
          </button>
}

export default MoreButton
