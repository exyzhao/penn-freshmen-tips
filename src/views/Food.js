import { useState } from "react"
import styled from "styled-components"
import pizza from "../pizza.svg"
import icecream from "../icecream.svg"
import sandwich from "../sandwich.svg"

import Tip from "../components/Tip"

// scaleFactor adjusts how large the component is when clicked
const scaleFactor = 2.5

const foods = [pizza, icecream, sandwich]

// x, y in px
const tips = [
  {
    number: 1,
    text: "Shiroi Hana, Twisted Tail, Forsythia, Bistro Perrier",
    bgcolor: "#F8DBB1",
    x: 40,
    y: 100
  },
  {
    number: 2,
    text: "Eat Ethiopian + Yemeni food in West Philly",
    bgcolor: "#F8B1D3",
    x: 100,
    y: 300
  },
  {
    number: 3,
    text: "Food trucks are your best friends",
    bgcolor: "#C4F8B1",
    x: 300,
    y: 200
  },
  {
    number: 4,
    text: "White Dog Café, Louie Louie, Kpod",
    bgcolor: "#FFAF3A",
    x: 40,
    y: 550
  },
  {
    number: 5,
    text: "Get the dining plan with the most dining dollars",
    bgcolor: "#76A2C6",
    x: 500,
    y: 110
  },
  {
    number: 6,
    text: "It is okay if your weight changes in your freshman year of college! Starting school is a major adjustment and our bodies adjust to the stress too",
    bgcolor: "#D4B1F8",
    x: 550,
    y: 350
  },
]

const Tips = styled.div`
  position: absolute;
  scale: ${props => props.zoomed ? scaleFactor : 1};
  left: ${props => props.x};
  top: ${props => props.y};
`

const Food = () => {

  const [zoomed, setZoomed] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <h1>Food</h1>
      <Tips zoomed={zoomed} x={x} y={y}>

        {tips.map(tip => (
          <Tip number={tip.number} text={tip.text} bgcolor={tip.bgcolor} x={tip.x} y={tip.y} key={tip.number} pic={foods[tip.number % foods.length]}
            handleClick={() => {
              setZoomed(!zoomed)
              // -scaleFactor * x places component @ left = 0
              setX(zoomed ? 0 : ["calc(", -scaleFactor * tip.x, "px + 38vw)"].join(""))
              setY(zoomed ? 0 : ["calc(", -scaleFactor * tip.y, "px + 25vh)"].join(""))
            }}
          />
        ))}

      </Tips>
    </>
  )
}

export default Food