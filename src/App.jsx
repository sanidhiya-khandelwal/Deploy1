import React from 'react'
import Navigation from './components/Navigation'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Navigation />
      <Carousel />
      <Container className='mt-4'>
        <Row>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
        </Row>


      </Container>

    </div>
  )
}

export default App