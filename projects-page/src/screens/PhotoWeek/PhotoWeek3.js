import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import GalleryImage from './GalleryImage.js';
import './PhotoWeek2.css';
import Footer from '../../components/Footer/Footer.js';
import Navbar from './Navbar.js';

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
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/ANSRI-8954.jpg', width: 3, height: 2,
        caption: "On Monday, Prof. Charlotte Brooks, history, of CUNY Baruch College traced China's attitude towards foreign citizenship over the past century and explained how foreign-born Chinese people are both an asset and a liability to the Chinese government today.",
        credit: "Anant Sriram / Sun Staff Photographer"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/DSC00499.jpg', width: 3, height: 2,
        caption: "The Bread N Butter food pantry operates at its temporary space at Anabel's Grocery on Monday. After recently partnering with Cornell, the pantry looks to expand and find a permanent location moving forward.",
        credit: "Jing Jiang / Sun Assistant Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/DSC06591.jpg', width: 3, height: 2,
        caption: "President Martha E. Pollack ran through a laundry list of ongoing initiatives at the Graduate and Professional Student Assembly on Monday, including efforts to improve mental health, provide more assistance for international students and students with disabilities, and increase diversity of both the undergraduate and graduate student bodies.",
        credit: "Michelle Yang / Sun Staff Photographer"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/DSC00504.jpg', width: 3, height: 2,
        caption: "Construction on the Cocktail Lounge continued on Monday. The renovations will be completed before the fall semester, when the lounge entrance that faces Willard Straight Hall will be open to the public for the first time.",
        credit: "Jing Jiang / Sun Assistant Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-TomJones-5.jpg', width: 3, height: 2,
        caption: "Tom Jones ’69 MRP ’72, a prominent figure in the 1969 Willard Straight Takeover, returned to Willard Straight Hall on Wednesday night to share lessons learned during the 50 years since the takeover and to reflect on the current state of race relations in America.",
        credit: "Boris Tsang / Sun Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/DSC01181.jpg', width: 3, height: 2,
        caption: "On Thursday, students gathered on the Arts Quad for the 6th Annual Art of Agriculture Day. The event, organized by Sigma Alpha sorority, featured a giant inflatable cow, yard games, baby ducks and free burgers.",
        credit: "Ben Parker / Sun Assistant Photography Editor"
      },
      {
        src: 'https://cornellsun.com/wp-content/uploads/2019/04/BYT-OurPlaceInSpace-1.jpg', width: 3, height: 2,
        caption: "As part of the People’s Climate Week, a variety of student organizations, including the Cornell Astronomical Society, set up activities, demonstrations and presentations on the Arts Quad for the Our Place in Space event Thursday night.",
        credit: "Boris Tsang / Sun Photography Editor"
      }
    ];

    return (
      <div className="photos-page-wrapper">

        <Navbar />

        <div className="photos-page-header-3">
          <div className="photos-header-gradient">

          </div>
          <div className="title-container">
            <h2 className="gallery-title"> April 28th, 2019 </h2>
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

export default PhotoWeek;
