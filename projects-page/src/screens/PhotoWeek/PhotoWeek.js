import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import GalleryImage from './GalleryImage.js';
import './PhotoWeek.css';

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
      { src: 'http://cornellsun.com/wp-content/uploads/2019/03/BYT-TrusteeDebate-1.jpg?resize=1170%2C781', width: 3, height: 2, 
        caption: "Ten candidates for Student Trustee fielded questions concerning everything from Greek reforms to mental health at a debate on Wednesday.",
        credit: "Boris Tsang / Sun Photography Editor" },
      { src: 'https://cornellsun.com/wp-content/uploads/2019/03/DSC05510.jpg?resize=1170%2C780', width: 3, height: 2,
        caption: "Former Cornell senior lecturer Dr. Susan Fleming spoke on Thursday about how women were less likely to negotiate their salaries than men were and provided advice on ways women could overcome this.",
        credit: "Michelle Yang / Sun Staff Photographer" },
      { src: 'https://cornellsun.com/wp-content/uploads/2019/03/BYT-CGSU-12.jpg?resize=1170%2C781', width: 3, height: 2,
        caption: "Robert Harrison, the chairman of Cornell’s Board of Trustees, and members of Cornell Graduate Students United listen to student testimonies about Cornell’s mental health services at a rally Thursday afternoon. CGSU presented Harrison with a petition calling for institutional improvements to Cornell’s mental health programs.",
        credit: " Boris Tsang / Sun Photography Editor" },
      { src: 'https://cornellsun.com/wp-content/uploads/2019/03/BYT-Brown-18.jpg?resize=1170%2C781', width: 3, height: 2,
        caption: "Freshman defenseman Joe Leahy scores his first collegiate goal during the ECAC semifinal game against Brown at Lake Placid on Friday. The Red cruised to a 6-0 victory, effectively securing a place in the NCAA tournament.",
        credit: "Boris Tsang / Sun Photography Editor"
      },
      { src: 'https://cornellsun.com/wp-content/uploads/2019/03/DSC00151.jpg?resize=1170%2C780', width: 3, height: 2, 
        caption: "Actor, comedian and television host Eric Andre treated a sold-out Bailey Hall to a screaming tirade about drugs, sex and Cuban souvenirs Saturday evening.",
        credit: "Ben Parker / Sun Assistant Photography Editor" },
      { src: 'https://cornellsun.com/wp-content/uploads/2019/03/BYT-Clarkson-1-1.jpg?resize=1170%2C781', width: 3, height: 2,
        caption: "Senior defenseman Matt Nuttle sits in silence before the ECAC championship game on Saturday. The Red lost the final against Clarkson, 3-2, in overtime.",
        credit: "Boris Tsang / Sun Photography Editor"},
      { src: 'https://cornellsun.com/wp-content/uploads/2019/03/BYT-Vigil-4.jpg', width: 3, height: 2,
        caption: "On Monday, the Cornell community honored victims of Friday’s New Zealand mosque attack in a vigil hosted by Cornell’s Muslim chaplaincy on Ho Plaza.",
        credit: "Boris Tsang / Sun Photography Editor"}
    ];

    return (
      <div className="photos-page-wrapper">
        <div className="photos-page-header">
          <div className="photos-header-gradient">
            
          </div>
          <div className="title-container">
            <h2 className="gallery-title"> March 24th, 2019 </h2>
            <h3 className="gallery-subtitle"> This Week In Photos </h3>
            <p className="photos-credit"><span> Photographs by Cornell Daily Sun Photography Department </span></p>
          </div>
        </div>
        <div className="gallery-container">
          <Gallery style={{maxHeight: "fit-content"}} photos={photos} columns={1} direction="column" ImageComponent={GalleryImage} onClick={this.openLightbox}/>
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
