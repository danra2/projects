import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './PhotoWeek.css';
import HoveredImage from "./HoveredImage";

class PhotoWeek extends Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {

    const photos = [
      { src: 'https://cornellsun.com/wp-content/uploads/2019/02/BYT-Snow-9.jpg', width: 3, height: 2, 
        caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)" },
      { src: 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2019/02/BYT-Wegmans-7.jpg?resize=1170%2C781', width: 3, height: 2,
        caption: "Wegmans introduced temporary price cuts on select food items after the government shutdown led to a shortage in national food stamp funding. The reductions started on Feb. 16 and will continue through March 2. (Boris Tsang / Sun Assistant Photography Editor)" },
      { src: "https://source.unsplash.com/iecJiKe_RNg/600x799", width: 3, height: 4,
        caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)" },
      { src: "https://source.unsplash.com/Dm-qxdynoEc/800x799", width: 1, height: 1,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i2.wp.com/cornellsun.com/wp-content/uploads/2019/02/BYT-RPI-6.jpg?resize=1170%2C781', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: "https://source.unsplash.com/NQSWvyVRIJk/800x599", width: 4, height: 3,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i0.wp.com/cornellsun.com/wp-content/uploads/2018/11/BYT_7502.jpg?resize=1170%2C781', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2018/11/11-17-2018_Pho_Night_by_Jose_Covarrubias-3.jpg?resize=1170%2C780', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: "https://source.unsplash.com/I1ASdgphUH4/800x599", width: 4, height: 3,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i0.wp.com/cornellsun.com/wp-content/uploads/2019/02/BYT-WSH-1.jpg?resize=1170%2C781', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i0.wp.com/cornellsun.com/wp-content/uploads/2019/02/BYT-OSU-10.jpg?resize=1170%2C781', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i2.wp.com/cornellsun.com/wp-content/uploads/2019/02/DSC03438.jpg?resize=1170%2C780', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  },
      { src: 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2019/02/BYT-EmployeeAssembly-17.jpg?resize=1170%2C781', width: 3, height: 2,
      caption: "Students head back to North Campus after classes Monday afternoon. (Boris Tsang / Sun Assistant Photography Editor)"  }
    ];

    return (
      <div className="photos-page-wrapper">
        <div className="photos-page-header">
          <header className="logo">
            <a href="http://cornellsun.com/" target="_blank">
              <img src="https://cornellsun.com/wp-content/uploads/2015/11/sunbannerwebsite-771x132.png" height="40px"/>
            </a>
          </header>
          <div className="title-container">
            <h2 className="gallery-title"> This Week In Photos </h2>
            <p className="gallery-subtitle"> February 24th, 2019 </p>
          </div>
        </div>
        <div className="gallery-container">
          <Gallery photos={photos} columns={3} direction="column" margin={10} onClick={this.openLightbox} ImageComponent={HoveredImage}/>
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    );
  }
}

export default PhotoWeek;
