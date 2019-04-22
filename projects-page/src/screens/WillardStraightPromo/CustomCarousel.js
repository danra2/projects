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
  }
];

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, redirect: 0 };
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

  handleOnClick = i => {
    this.setState({ redirect: i });
  };

  render() {
    const { activeIndex } = this.state;
    var slides;
    if (this.state.redirect > 0) {
      slides = [
        <Redirect push to={`/WillardStraight/opeds/${this.state.redirect}`} />
      ];
      this.handleOnClick(0);
    } else {
      slides = items.map(item => {
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
              onClick={() => {
                this.handleOnClick(item.id);
              }}
            />
          </CarouselItem>
        );
      });
    }
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
