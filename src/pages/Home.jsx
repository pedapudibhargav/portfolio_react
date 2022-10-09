import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AnimationString(props) {
  const inputString = props.content.replace(/ /g, '|');
  // const animationClasses = ['elastic-animate', 'horizontal-flip-animate', 'rotate-180', 'rotate-180-negative', 'skew-animate'];
  const animationClasses = ['elastic-animate'];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleLetterHover = (e) => {
    const animationClass = animationClasses[getRandomInt(animationClasses.length)];
    if (e.target.classList.length) return;
    e.target.classList.add(animationClass);
    setTimeout(() => {
      e.target.classList.remove(animationClass);
    }, 1000);
  }

  return (
    <>
      {console.log('inputstring:' + inputString)}
      {inputString.split('').map((char, i) =>
        <span onMouseEnter={handleLetterHover} key={i}>{
          (char === '|') ? '\u00A0' : char}</span>
      )}
    </>
  )
}


export default function home() {
  return (
    <>
      <div className="fh-row">
        <div className="fh-section">
          <Container>
            <Row className='pb-6'>
              <Col md="auto">
                <div className="intro-text">
                  <h2>
                    <AnimationString content='Hi,' />
                  </h2>
                  <h2>
                    <AnimationString content={`I'm Bhargav,`} />
                  </h2>
                  <h3>
                    <AnimationString content={`full stack engineer`} />
                  </h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
