import styled from "styled-components"

const TipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  text-align: center;
  left: ${props => props.x + "px"};
  top: ${props => props.y + "px"};
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.bgcolor};

  img {
    width: 95px;
    height: auto;
  }

  p {
    position: absolute;
    top: 15px;
    left: 29px;
    background-color: white;
    border-radius: 10px;
    padding: 0 3px;
    transform: rotate(-5deg);
  }
`

const Tip = (props) => {
  return (
    <TipContainer x={props.x} y={props.y} key={props.number}>
      <Circle bgcolor={props.bgcolor} onClick={props.handleClick}>
        <img src={props.pic} alt="default" />
        <p>TIP {props.number}</p>
      </Circle>
      <p onClick={props.handleClick}>{props.text}</p>
    </TipContainer>
  )
}

export default Tip