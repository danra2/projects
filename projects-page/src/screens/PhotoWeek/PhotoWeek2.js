import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import GalleryImage from './GalleryImage.js';
import './PhotoWeek2.css';
import Footer from '../../components/Footer/Footer.js';
import Navbar from './Navbar.js';


class PhotoWeek2 extends Component {

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
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-DairyAlternativeDay-2.jpg', width: 3, height: 2,
        caption: "Students from the Cornell Vegan Society and Cornell Students for Animal Rights held their first 'Dairy Alternative Day' outside Stocking Hall on Monday.",
        credit: "Boris Tsang / Sun Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/DSC06085.jpg', width: 3, height: 2,
        caption: "Prof. Frank Mitloehner, animal science and Air Quality Extension Specialist at the University of California, Davis, spoke on Monday about the latest research surrounding animal agriculture, claiming that its environmental impact was 'surprisingly modest' and pointing to food waste as the largest contributor to environmental damage.",
        credit: "Michelle Yang / Sun Staff Photographer"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT_1904.jpg', width: 3, height: 2,
        caption: "Students relax on Libe Slope Monday afternoon.",
        credit: " Boris Tsang / Sun Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/DSC00931.jpg', width: 3, height: 2,
        caption: "On Wednesday, Stephen Moore, nominee for governor of the Federal Reserve board and former advisor for Trump’s 2016 election campaign, offered his views on President Trump and his economic policies.",
        credit: "Ben Parker / Sun Assistant Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-ChiliCookOff-7.jpg', width: 3, height: 2,
        caption: "Dean of Students Vijay Pendakur samples a chili at the 15th Annual Chili Cook-off on Thursday.",
        credit: "Ben Parker / Sun Assistant Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-SA-1.jpg', width: 3, height: 2,
        caption: "Proponents of Resolution 36, which would “urge” Cornell to divest from companies “profiting from the occupation of Palestine and human rights violations,” brought a banner to the Student Assembly meeting on Thursday with a list of the student organizations in favor of the resolution. Although the S.A. members voted 14-13-1 for the resolution, two votes were allocated to the community members, who voted 248-330-4 against; the resolution failed as a result.",
        credit: "Boris Tsang / Sun Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-IthacaFarmersMarket-39.jpg', width: 3, height: 2,
        caption: "Community members unwind at the docks as the Ithaca Farmers Market wraps up Saturday afternoon.",
        credit: "Boris Tsang / Sun Photography Editor"
      }
    ];

    return (
      <div className="photos-page-wrapper">

        <Navbar />
        <div className="photos-page-header-2">
          <div className="photos-header-gradient">

          </div>
          <div className="title-container">
            <h2 className="gallery-title"> April 15th, 2019 </h2>
            <h3 className="gallery-subtitle"> This Week In Photos </h3>
            <p className="photos-credit"><span> Photographs by Cornell Daily Sun Photography Department </span></p>
          </div>
        </div>
        <div className="gallery-container">
          <Gallery style={{ maxHeight: "fit-content" }} photos={photos} columns={1} direction="column" ImageComponent={GalleryImage} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default PhotoWeek2;
