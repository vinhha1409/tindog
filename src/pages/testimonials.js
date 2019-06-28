import React from 'react';
import {Carousel} from 'react-bootstrap'
import Dog from '../images/dog-img.jpg';
import Lady from '../images/lady-img.jpg';
const Testimonials = () => (
  <Carousel>
    <Carousel.Item>
      <img className="testimonial-image" src={Dog} alt="dog-profile" />
      <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
      <em>Pebbles, New York</em>
    </Carousel.Item>
    <Carousel.Item>
      <img class="testimonial-image" src={Lady} alt="lady-profile"/>
      <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
      <em>Beverly, Illinois</em>
    </Carousel.Item>
</Carousel>
);

export default Testimonials;