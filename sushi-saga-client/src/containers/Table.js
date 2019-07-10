import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const renderBalance = () => {
    let startingBalance = 100
    let totalCost = 0
    props.eatenSushi.map(sushi => totalCost += sushi.price)
    let finalBalance = startingBalance - totalCost
    if (finalBalance <= 0) {
      return "You have no money left!"
    } else {
      return `You have ${finalBalance} USD left!`
    }
  }

  return (
    <Fragment>
      <h1 className="remaining">
        {renderBalance()}
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
