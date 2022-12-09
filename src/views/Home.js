import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const [open, setOpen] = useState(false);
  const frontRef = useRef();
  const backRef = useRef();

  const frontSpring = useSpring({
    ref: frontRef,
    config: { mass: 1, tension: 200, friction: 20 },
    to: { transform: open ? 'rotateY(0deg)' : 'rotateY(-180deg)' },
  });

  const backSpring = useSpring({
    ref: backRef,
    config: { mass: 1, tension: 200, friction: 20 },
    to: { transform: open ? 'rotateY(180deg)' : 'rotateY(0deg)' },
  });

  return (
    <div onClick={() => setOpen(!open)}>
      <animated.div
        className="book-front"
        style={frontSpring}
        ref={frontRef}
      >
        Front Cover
      </animated.div>
      <animated.div
        className="book-back"
        style={backSpring}
        ref={backRef}
      >
        Back Cover
      </animated.div>
    </div>
  )
}

export default Home