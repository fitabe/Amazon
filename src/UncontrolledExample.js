import Carousel from "react-bootstrap/Carousel";
import "./UncontrolledExample.css";
function UncontrolledExample() {
  return (
    <Carousel className="wholeRapper">
      <Carousel.Item>
        {/* <h3>Hi! To Evangadi Oct-Batch 2023 G-3</h3> */}

        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71FZBWkUf7L._SX3000_.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="promotion">
          {/* <h3>Evangadi Oct-Batch 2023</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Evangadi Oct-Batch 2023</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61JpWBL0zIL._SX3000_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Evangadi Oct-Batch 2023</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
