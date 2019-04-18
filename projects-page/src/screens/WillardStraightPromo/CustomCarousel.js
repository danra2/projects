import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";
import { Redirect } from "react-router";

const items = [
  {
    id: 1,
    src: require("./images/jones.png")
  },
  {
    id: 2,
    src: require("./images/davis.png")
  },
  {
    id: 3,
    src: require("./images/harrison.png")
  },
  {
    id: 4,
    src: require("./images/acree.png")
  },
];

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      if (this.state.redirect) {
        return <Redirect to={`/WillardStraight/opeds/${item.id}`} />;
      }
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            alt={item.altText}
            className="carousel-hover"
            onClick={this.handleOnClick}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        slide={false}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CustomCarousel;

{
  /* 
    import {
      CarouselProvider,
      Slider,
      Slide,
      DotGroup,
      Image
    } from "pure-react-carousel";
    import "pure-react-carousel/dist/react-carousel.es.css";

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={45}
      totalSlides={2}
      isPlaying={true}
      lockOnWindowScroll={true}
      dragEnabled={false}
    >
      <Slider classNameAnimation="transition">
        <Slide index={0}>
          <Image
            src={require("./images/opedHero2.png")}
            alt="Oped Speaker One"
          />
        </Slide>
        <Slide index={1}>
          <Image
            src={require("./images/opedHero1.png")}
            alt="Oped Speaker Two"
          />
        </Slide>
      </Slider>
      <DotGroup className="dots" />
    </CarouselProvider> */
}
