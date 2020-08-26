


window.addEventListener('load', function () {
  class StartSlider {
    constructor(props) {
      this.sliderSelector = document.querySelector(props.selector);
      this.settings = props.settingsSliders;
      this.contentSize = props.contentSize;
      this.slidersArray = this.settings;
      this.slidersNumbers = this.slidersArray.length;
      this.slidersFontsArray = props.fonts;
      this.fontNameTitle = props.fontNameTitle;
      this.fontNameTextAccent = props.fontNameTextAccent;
      this.fontNameText = props.fontNameText;
      this.fontNameButton = props.fontNameButton;
      this.slideIndex = 0;
      this.arrows = props.arrows;
      this.buttonsSwitches = props.buttonsSwitches;
      this.supportWebp = false;
      this.slideAutoPlay = props.autoPlay;
      this.slideAutoPlaySpeed = props.autoPlaySpeed;
    }
  
    addSlide() {
      for (let i = 0; i < this.slidersNumbers; i++) {
        let tagSlide = document.createElement('div');
        tagSlide.className = 'slider-start__slide';
        tagSlide.style.backgroundImage = `url(${this.settings[i].backgroundImage})`;
        this.sliderSelector.appendChild(tagSlide);
        if (i === 0) setTimeout(() => tagSlide.className += ' slider-start__slide_active', 10);
  
        let tagContainerSlide = document.createElement('div');
        tagContainerSlide.className = 'slider-start__container container';
        tagSlide.appendChild(tagContainerSlide);
  
        let tagSlideContent = document.createElement('div');
        tagSlideContent.className = 'slider-start__content';
        tagContainerSlide.appendChild(tagSlideContent);
  
        let tagSlideInfo = document.createElement('div');
        tagSlideInfo.className = 'slider-start__info';
        tagSlideContent.appendChild(tagSlideInfo);
  
        const buttonHover = (button) => {
          button.addEventListener('mouseover', () => {
            button.style.backgroundColor = this.settings[i].buttonBackgroundHover;
            button.style.color = this.settings[i].buttonTextColorHover;
          })
  
          button.addEventListener('mouseout', () => {
            button.style.color = this.settings[i].buttonTextColor;
            button.style.backgroundColor = this.settings[i].buttonBackground;
          })
        }
  
        if (!this.settings[i].productId) {
          if (this.settings[i].textAccent) {
            let tagSlideTextAccent = document.createElement('span');
            tagSlideTextAccent.className = 'slider-start__text-accent';
            tagSlideTextAccent.style.fontFamily = this.fontNameTextAccent;
            tagSlideTextAccent.style.color = this.settings[i].textAccentColor;
            tagSlideTextAccent.innerHTML = this.settings[i].textAccent;
            tagSlideInfo.appendChild(tagSlideTextAccent);
          }
  
          if (this.settings[i].title) {
            let tagSlideTitle = document.createElement(this.settings[i].titleTag ? this.settings[i].titleTag : 'div');
            tagSlideTitle.className = 'slider-start__title';
            tagSlideTitle.style.fontFamily = this.fontNameTitle;
            tagSlideTitle.style.color = this.settings[i].titleColor;
            tagSlideTitle.innerHTML = this.settings[i].title;
            tagSlideInfo.appendChild(tagSlideTitle);
          }
  
          if (this.settings[i].text) {
            let tagSlideText = document.createElement('p');
            tagSlideText.className = 'slider-start__text';
            tagSlideText.style.fontFamily = this.fontNameText;
            tagSlideText.style.color = this.settings[i].textColor;
            tagSlideText.innerHTML = this.settings[i].text;
            tagSlideInfo.appendChild(tagSlideText);
          }
  
          if (this.settings[i].button) {
            let tagSlideButton = document.createElement('a');
            tagSlideButton.className = 'slider-start__button';
            tagSlideButton.setAttribute('href', this.settings[i].buttonLink);
            tagSlideButton.style.fontFamily = this.fontNameButton;
            tagSlideButton.style.color = this.settings[i].buttonTextColor;
            tagSlideButton.style.backgroundColor = this.settings[i].buttonBackground,
              tagSlideButton.style.border = this.settings[i].buttonBorder;
            tagSlideButton.innerHTML = this.settings[i].buttonText;
            tagSlideInfo.appendChild(tagSlideButton);
  
            if (this.settings[i].buttonBackgroundHover) {
              buttonHover(tagSlideButton);
            }
          }
        }
  
        if (this.settings[i].productId) {
          let tagSlideProductImgBox = document.createElement('div');
          tagSlideProductImgBox.className = 'slider-start__product-imgbox';
          tagSlideInfo.appendChild(tagSlideProductImgBox);
  
          let tagSlideProductImglink = document.createElement('a');
          tagSlideProductImglink.setAttribute('href', this.settings[i].productLink);
          tagSlideProductImgBox.appendChild(tagSlideProductImglink);
  
          let tagSlideProductPicture = document.createElement('picture');
          tagSlideProductImglink.appendChild(tagSlideProductPicture);
  
          if (this.settings[i].productImgWebp) {
            let tagSource = document.createElement('source');
            tagSource.setAttribute('type', 'image/webp');
            tagSource.setAttribute('srcset', this.settings[i].productImgWebp);
            tagSlideProductPicture.appendChild(tagSource);
          }
  
          let tagSlideProductImg = document.createElement('img');
          tagSlideProductImg.className = 'slider-start__product-imgbox_img';
          tagSlideProductImg.setAttribute('src', this.settings[i].productImg);
          tagSlideProductPicture.appendChild(tagSlideProductImg);
  
          let tagSlideProductInfo = document.createElement('div');
          tagSlideProductInfo.className = 'slider-start__product-info';
          tagSlideInfo.appendChild(tagSlideProductInfo);
  
          let tagSlideProductTitleLink = document.createElement('a');
          tagSlideProductTitleLink.className = 'slider-start__product-link'
          tagSlideProductTitleLink.setAttribute('href', this.settings[i].productLink);
          tagSlideProductInfo.appendChild(tagSlideProductTitleLink);
  
          let tagSlideProductTitle = document.createElement('div');
          tagSlideProductTitle.className = 'slider-start__product-title';
          tagSlideProductTitle.style.fontFamily = this.fontNameTitle;
          tagSlideProductTitle.style.color = this.settings[i].titleColor;
          tagSlideProductTitle.innerHTML = this.settings[i].productTitle;
          tagSlideProductTitleLink.appendChild(tagSlideProductTitle);
  
          let tagSlideProductDescription = document.createElement('div');
          tagSlideProductDescription.className = 'slider-start__product-description';
          tagSlideProductDescription.style.fontFamily = this.fontNameText;
          tagSlideProductDescription.style.color = this.settings[i].textColor;
          tagSlideProductDescription.innerHTML = this.settings[i].productDescription;
          tagSlideProductInfo.appendChild(tagSlideProductDescription);
  
          let tagSlideProductPrices = document.createElement('div');
          tagSlideProductPrices.className = 'slider-start__product-prices';
          tagSlideProductInfo.appendChild(tagSlideProductPrices);
  
          let tagSlideProductPrice = document.createElement('div');
          tagSlideProductPrice.className = 'slider-start__product-prices_current';
          tagSlideProductPrice.style.fontFamily = this.fontNameText;
          tagSlideProductPrice.style.color = this.settings[i].productPriceColor;
          tagSlideProductPrice.innerHTML = this.settings[i].productPrice;
          tagSlideProductPrices.appendChild(tagSlideProductPrice);
  
          if (this.settings[i].productPriceNew) {
            let tagSlideProductPriceNew = document.createElement('div');
            tagSlideProductPriceNew.className = 'slider-start__product-prices_new';
            tagSlideProductPriceNew.style.fontFamily = this.fontNameText;
            tagSlideProductPriceNew.style.color = this.settings[i].productPriceNewColor;
            tagSlideProductPriceNew.innerHTML = this.settings[i].productPriceNew;
            tagSlideProductPrices.appendChild(tagSlideProductPriceNew);
  
            let tagSlideProductPriceNewBlacken = document.createElement('span');
            tagSlideProductPriceNewBlacken.className = 'slider-start__product-prices_new-blacken';
            tagSlideProductPriceNewBlacken.style.backgroundColor = this.settings[i].productPriceNewColorBlacken;
            tagSlideProductPriceNew.appendChild(tagSlideProductPriceNewBlacken);
          }
  
          let tagSlideProductButtton = document.createElement('a');
          tagSlideProductButtton.className = 'slider-start__button slider-start__product-button';
          tagSlideProductButtton.setAttribute('href', this.settings[i].productLink);
          tagSlideProductButtton.style.fontFamily = this.fontNameButton;
          tagSlideProductButtton.style.color = this.settings[i].buttonTextColor;
          tagSlideProductButtton.style.backgroundColor = this.settings[i].buttonBackground,
            tagSlideProductButtton.style.border = this.settings[i].buttonBorder;
          tagSlideProductButtton.innerHTML = this.settings[i].buttonText;
          tagSlideProductInfo.appendChild(tagSlideProductButtton);
  
          buttonHover(tagSlideProductButtton);
        }
  
      }
      this.slidersArray = document.querySelectorAll('.slider-start__slide');
    }
  
    addSliderFonts() {
      for (let i = 0; i < this.slidersFontsArray.length; i++) {
        document.querySelector('head').insertAdjacentHTML('beforeend', this.slidersFontsArray[i]);
      }
    }
  
    addArrows() {
      let tagArrows = document.createElement('div');
      tagArrows.className = 'slider-start__arrows';
  
      let tagArrowPrev = document.createElement('span');
      tagArrowPrev.className = 'slider-start__arrows_prev start-icon-arrow-prev';
  
      let tagArrowNext = document.createElement('span');
      tagArrowNext.className = 'slider-start__arrows_next start-icon-arrow-next';
  
      this.sliderSelector.appendChild(tagArrows);
      tagArrows.appendChild(tagArrowPrev);
      tagArrows.appendChild(tagArrowNext);
    }
  
    addButtonsSwitches() {
      let tagButtonsSwitches = document.createElement('div');
      tagButtonsSwitches.className = 'slider-start__buttons-switches';
      this.sliderSelector.appendChild(tagButtonsSwitches);
  
      for (let i = 0; i < this.slidersNumbers; i++) {
        let tagButtonSwitch = document.createElement('button');
        tagButtonSwitch.setAttribute('role', 'button');
        tagButtonSwitch.className = 'slider-start__button-switch';
        tagButtonSwitch.innerHTML = '<span></span>';
        tagButtonsSwitches.appendChild(tagButtonSwitch);
        if (i === 0) tagButtonSwitch.className = 'slider-start__button-switch slider-start__button-switch_active';
      }
    }
  
    _removeActiveSliders() {
      for (let i = 0; i < this.slidersNumbers; i++) {
        this.slidersArray[i].className = 'slider-start__slide';
      }
    }
  
    _addActiveSliders(n) {
      this.slidersArray[n].className += ' slider-start__slide_active';
      if (this.settings[n].productId) {
        const slidersInfoArray = document.querySelectorAll('.slider-start__info');
        slidersInfoArray[n].style.maxWidth = 'none';
      }
    }
  
    _removeClassButtonsSwitchActive() {
      const buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
  
      for (let i = 0; i < buttonsSwitchesArray.length; i++) {
        buttonsSwitchesArray[i].className = 'slider-start__button-switch';
      }
    }
  
    _addClassButtonsSwitchActive(n) {
      const buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
      buttonsSwitchesArray[n].className += ' slider-start__button-switch_active';
    }
  
    _addSlideEffects(n) {
      if (this.settings[n].parallaxInfo) this.addParallaxInfo(n);
      if (this.settings[n].slideEffect === 'backgroundMovement') this.addBackgroundMovement(n);
      if (this.settings[n].slideEffect === 'pallaxMouseMove') this.addParallaxMouseMove(n);
      if (this.settings[n].slideEffect === 'backgroundVideo') this.addBackgroundVideo(n);
      if (!this.settings[n].productId && this.settings[n].titleAnimation) {
        this.addTitleAnimation(n, false);
        this.addTitleAnimation(n, true);
      }
      if (this.slideAutoPlay) this.addSlideAutoPlay();
      if (this.arrows) this.changeColorElemsNavigation(n);
    }
  
    slideEffects() {
      for (let i = 0; i < this.slidersNumbers; i++) {
        setTimeout(() => {
          if (this.slideAutoPlay && this.slidersArray[i].className === 'slider-start__slide slider-start__slide_active') this.addSlideAutoPlay(i);
          if (this.settings[i].parallaxInfo && this.slidersArray[i].className === 'slider-start__slide slider-start__slide_active') this.addParallaxInfo(i);
          if (this.settings[i].slideEffect === 'backgroundMovement' && this.slidersArray[i].className === 'slider-start__slide slider-start__slide_active') this.addBackgroundMovement(i);
          if (this.settings[i].slideEffect === 'pallaxMouseMove' && this.slidersArray[i].className === 'slider-start__slide slider-start__slide_active') this.addParallaxMouseMove(i);
          if (this.settings[i].slideEffect === 'backgroundVideo' && this.slidersArray[i].className === 'slider-start__slide slider-start__slide_active') this.addBackgroundVideo(i);
          if (!this.settings[i].productId && this.settings[i].titleAnimation && this.slidersArray[i].className === 'slider-start__slide slider-start__slide_active') this.addTitleAnimation(i);
        }, 11)
      }
      if (this.arrows || this.buttonsSwitches) this.changeColorElemsNavigation();
    }
  
    changeToWebp() {
      function checkWebp(feature, callback) {
        var kTestImages = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        var img = new Image();
  
        img.onload = function () {
          var result = img.width > 0 && img.height > 0;
          callback(feature, result);
        };
  
        img.onerror = function () {
          callback(feature, false);
        };
  
        img.src = "data:image/webp;base64," + kTestImages[feature];
      }
  
      checkWebp('lossy', (feature, result) => {
        if (result) {
          //document.querySelector('html').className = 'start-slider-webp');
          for (let i = 0; i < this.slidersNumbers; i++) {
            if (this.settings[i].backgroundImageWebp) {
              this.slidersArray[i].style.backgroundImage = `url(${this.settings[i].backgroundImageWebp})`;
            }
          }
          this.supportWebp = result;
        }
      })
    }
  
    toggleArrowsSliders() {
      this.sliderSelector.addEventListener('click', (e) => {
        if (e.target.className === 'slider-start__arrows_prev start-icon-arrow-prev') {
          this._removeActiveSliders();
  
          if (this.buttonsSwitches) this._removeClassButtonsSwitchActive();
  
          if (this.slideIndex === 0) {
            this.slideIndex = this.slidersNumbers;
          }
  
          this.slideIndex--;
  
          this._addActiveSliders(this.slideIndex);
  
          if (this.buttonsSwitches) this._addClassButtonsSwitchActive(this.slideIndex);
  
          this._addSlideEffects(this.slideIndex);
        }
  
        if (e.target.className === 'slider-start__arrows_next start-icon-arrow-next') {
          this._removeActiveSliders();
  
          this._removeClassButtonsSwitchActive();
  
          this.slideIndex++;
  
          if (this.slideIndex > this.slidersNumbers - 1) {
            this.slideIndex = 0;
          }
  
          this._addActiveSliders(this.slideIndex);
  
          if (this.buttonsSwitches) this._addClassButtonsSwitchActive(this.slideIndex);
  
          this._addSlideEffects(this.slideIndex);
        }
      })
    }
  
    toogleButtonsSwitchesSliders() {
      const buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
  
      for (let i = 0; i < buttonsSwitchesArray.length; i++) {
        buttonsSwitchesArray[i].addEventListener('click', () => {
          this.slideIndex = i;
  
          if (this.buttonsSwitches) {
            this._removeClassButtonsSwitchActive();
            this._addClassButtonsSwitchActive(this.slideIndex);
          }
  
          this._removeActiveSliders();
          this._addActiveSliders(this.slideIndex);
  
          this._addSlideEffects(this.slideIndex);
        })
      }
    }
  
    addParallaxInfo(slideIndex) {
      const sliderInfoArray = document.querySelectorAll('.slider-start__info');
  
      const changeTransformSliderInfo = (fn) => {
        sliderInfoArray[slideIndex].style.transform = '';
        fn();
      }
  
      changeTransformSliderInfo(() => {
        window.addEventListener('scroll', () => {
          let translateSize = window.pageYOffset * 0.09;
  
          if (window.pageYOffset > 1500) {
            translateSize = 0;
            sliderInfoArray[slideIndex].style.transform = '';
          }
  
          if (translateSize > 69) {
            translateSize = 70;
          }
  
          sliderInfoArray[slideIndex].style.transform = `translateY(${translateSize}px)`;
        })
      })
  
    }
  
    addBackgroundMovement(slideIndex) {
      const buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
      let positionX = 0;
  
      const timePositionX = setInterval(() => {
        positionX += 0.1;
        this.slidersArray[slideIndex].style.backgroundPosition = `-${positionX}px center`;
      }, 1);
  
      setTimeout(() => { clearInterval(timePositionX); }, 20000);
  
      this.slidersArray[slideIndex].style.backgroundSize = 'calc(100% + 600px)';
  
      for (let i = 0; i < buttonsSwitchesArray.length; i++) {
        buttonsSwitchesArray[i].addEventListener('click', () => {
          clearInterval(timePositionX);
        })
      }
  
      this.sliderSelector.addEventListener('click', (e) => {
        if (e.target.className === 'slider-start__arrows_prev start-icon-arrow-prev') {
          clearInterval(timePositionX);
        }
  
        if (e.target.className === 'slider-start__arrows_next start-icon-arrow-next') {
          clearInterval(timePositionX);
        }
      })
  
      if (this.slideAutoPlay && this.slidersArray[slideIndex].className === 'slider-start__slide slider-start__slide_active') {
        setTimeout(() => { clearInterval(timePositionX); }, `${this.slideAutoPlaySpeed}000`);
      }
    }
  
    addParallaxMouseMove(slideIndex) {
      const viewportLarge = window.innerWidth > 950 ? true : false;
  
      const BGmove = (e) => {
        this.slidersArray[slideIndex].style.backgroundPosition = `-${(e.pageX * 0.06)}px -${(e.pageY * 0.06)}px`;
      }
  
      const changeSliderBackground = (fn) => {
        this.slidersArray[slideIndex].removeEventListener('mousemove', BGmove);
        this.slidersArray[slideIndex].style.backgroundSize = '';
        this.slidersArray[slideIndex].style.backgroundPosition = '0 0';
        fn();
      }
  
      changeSliderBackground(() => {
        this.slidersArray[slideIndex].style.backgroundSize = 'calc(100% + 150px)';
        this.slidersArray[slideIndex].addEventListener('mousemove', BGmove);
      })
    }
  
    addBackgroundVideo(slideIndex) {
      const sliderBackground = document.querySelector('.slider-start__bg');
  
      if (!sliderBackground) {
        let tagSliderBackground = document.createElement('div');
        tagSliderBackground.className = 'slider-start__bg';
        this.slidersArray[slideIndex].appendChild(tagSliderBackground);
  
        let tagVideo = document.createElement('video');
        tagVideo.className = 'slider-start__video-bg';
        tagVideo.setAttribute('src', this.settings[slideIndex].backgroundVideo);
        tagVideo.setAttribute('autoplay', '');
        tagVideo.setAttribute('muted', '');
        tagVideo.setAttribute('loop', '');
        tagSliderBackground.appendChild(tagVideo);
      }
    }
  
    addTitleAnimation(slideIndex, returnDefaultValue) {
      let title;
  
      const findTitleElem = (childs) => {
        childs.forEach(function (elem) {
          if (elem.className === 'slider-start__title') {
            title = elem;
            return false;
          } else {
            findTitleElem(elem.childNodes);
          }
        })
  
        return title;
      }
  
      const titleElemsArray = document.querySelectorAll('.slider-start__title');
      const defaultTitle = findTitleElem(this.slidersArray[slideIndex].childNodes).innerText;
  
      const titleAnimation = (fn) => {
        findTitleElem(this.slidersArray[slideIndex].childNodes).innerHTML = this.settings[slideIndex].title;
        if (returnDefaultValue) fn();
      }
  
      titleAnimation(() => {
        findTitleElem(this.slidersArray[slideIndex].childNodes).innerHTML = '';
  
        const titleWords = defaultTitle.split(' ');
  
        for (let i = 0; i < titleWords.length; i++) {
          let tagTitleWord = document.createElement('div');
          tagTitleWord.className = 'slider-start__title-word';
          findTitleElem(this.slidersArray[slideIndex].childNodes).appendChild(tagTitleWord);
  
          for (let k = 0; k < titleWords[i].length; k++) {
            let tagTitleLetter = document.createElement('span');
            tagTitleLetter.className = 'slider-start__title-letter';
            tagTitleLetter.innerText = titleWords[i][k];
            tagTitleWord.appendChild(tagTitleLetter);
          }
        }
  
        const slideLettersArray = document.querySelectorAll('.slider-start__title-letter');
        slideLettersArray.forEach((elem, index) => {
          if (index & 1) {
            elem.style.top = '100px';
            elem.style.transition = 'top 1.2s ease';
            setTimeout(() => {
              elem.style.top = 0;
            }, 10);
          }
          if (index % 2 === 0) {
            elem.style.bottom = '100px';
            elem.style.transition = 'bottom 1.5s ease';
            setTimeout(() => {
              elem.style.bottom = 0;
            }, 10);
          }
        })
      });
    }
  
    addSlideAutoPlay() {
      const indicatorElem = document.querySelector('.slider-start__indicator');
      const buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
      let indicatorSize = 0;
  
      if (!indicatorElem) {
        let tagIndicator = document.createElement('div');
        tagIndicator.className = 'slider-start__indicator';
  
        let tagIndicatorLines = document.createElement('div');
        tagIndicatorLines.className = 'slider-start__indicator-lines';
  
        let tagIndicatorLineTop = document.createElement('div');
        tagIndicatorLineTop.className = 'slider-start__indicator-lines_top';
  
        let tagIndicatorLineBottom = document.createElement('div');
        tagIndicatorLineBottom.className = 'slider-start__indicator-lines_bottom';
  
        this.sliderSelector.appendChild(tagIndicator);
        tagIndicator.appendChild(tagIndicatorLines);
        tagIndicatorLines.appendChild(tagIndicatorLineTop);
        tagIndicatorLines.appendChild(tagIndicatorLineBottom);
      }
  
      const timeIndicator = setInterval(() => {
        if (indicatorSize < 100) {
          indicatorSize += 100 / (this.slideAutoPlaySpeed * 10);
        }
        document.querySelector('.slider-start__indicator-lines_top').style.width = `${indicatorSize}%`;
  
        for (let i = 0; i < buttonsSwitchesArray.length; i++) {
          buttonsSwitchesArray[i].addEventListener('click', () => {
            clearInterval(timeIndicator);
          })
        }
  
        this.sliderSelector.addEventListener('click', (e) => {
          if (e.target.className === 'slider-start__arrows_prev start-icon-arrow-prev') {
            clearInterval(timeIndicator);
          }
  
          if (e.target.className === 'slider-start__arrows_next start-icon-arrow-next') {
            clearInterval(timeIndicator);
          }
        })
  
        if (indicatorSize >= 100) {
  
          clearInterval(timeIndicator);
  
          if (this.slideIndex < this.slidersNumbers) {
            this.slideIndex++;
          }
          if (this.slideIndex === this.slidersNumbers) {
            this.slideIndex = 0;
          }
  
          if (this.buttonsSwitches) {
            this._removeClassButtonsSwitchActive();
            this._addClassButtonsSwitchActive(this.slideIndex);
          }
  
          this._removeActiveSliders();
          this._addActiveSliders(this.slideIndex);
  
  
          this._addSlideEffects(this.slideIndex);
        }
      }, 100);
  
    }
  
    changeColorElemsNavigation(slideIndex = 0) {
      const sliderArrows = document.querySelector('.slider-start__arrows');
      const sliderButtonsSwithes = document.querySelectorAll('.slider-start__button-switch > span');
  
      switch (typeof this.settings[slideIndex].colorNavigation === 'string') {
        case true:
          if (this.buttonsSwitches) {
            for (let i = 0; i < this.slidersNumbers; i++) {
              sliderButtonsSwithes[i].style.backgroundColor = this.settings[slideIndex].colorNavigation;
            }
          }
          if (this.arrows) sliderArrows.style.color = this.settings[slideIndex].colorNavigation;
          break;
        case false:
          if (this.buttonsSwitches) {
            for (let i = 0; i < this.slidersNumbers; i++) {
              sliderButtonsSwithes[i].style.backgroundColor = '';
            }
          }
          if (this.arrows) sliderArrows.style.color = '';
          break;
      }
    }
  
    active() {
      const preload = document.querySelector('.slider-start__preloader');
      this.sliderSelector.removeChild(preload);
  
      if (this.settings) this.addSlide();
  
      if (this.settings[0].productId) {
        const slidersInfoArray = document.querySelectorAll('.slider-start__info');
        slidersInfoArray[0].style.maxWidth = 'none';
      }
  
      if (this.settings) this.addSliderFonts();
      if (this.settings) this.changeToWebp();
      if (this.arrows) this.addArrows();
      if (this.arrows) this.toggleArrowsSliders();
      if (this.buttonsSwitches) this.addButtonsSwitches();
      if (this.buttonsSwitches) this.toogleButtonsSwitchesSliders();
      if (this.settings) this.slideEffects();
    }
  }

  const webasyst = new StartSlider({
    selector: '.my-slider',
    arrows: true,
    buttonsSwitches: true,
    autoPlay: false,
    autoPlaySpeed: 5,
    fonts: [
      '<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">',
      '<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">',
      '<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">'],
    fontNameTitle: '"Roboto Condensed", sans-serif',
    fontNameText: '"Open Sans Condensed", sans-serif',
    fontNameTextAccent: '"Pacifico", cursive',
    fontNameButton: '"Roboto Condensed", sans-serif',
    contentSize: false,
    settingsSliders: [
      {
        productId: true,
        productTitle: 'Велосипед Forward Sporting 3.0 Disc (2020) горный рам',
        productDescription: 'Купить Велосипед Forward Sporting 3.0 Disc (2020) горный рам.:19" кол.:27.5" черный 16.5кг (RBKW0MN7Q006) в интернет-магазине Ситилинк по доступной цене.',
        productPrice: '12000 ₽',
        productPriceNew: '9000 ₽',
        productPriceColor: 'rgb(36, 238, 53)',
        productPriceNewColor: '#111',
        productPriceNewColorBlacken: 'red',
        productImg: './images/bike.jpg',
        productImgWebp: './images/bike.webp',
        productLink: '#',
        title: 'ЗАГОЛОВОК СЛАЙДЕРА СЛАЙДЕРА',
        titleTag: 'h1',
        titleColor: '#fff',
        titleAnimation: true,
        textAccent: 'Супер!',
        textAccentColor: '#fff',
        text: 'Далеко–далеко разносилась весенняя песня жаворонка по полям, по лугам и даже по лесным чащам. Заслышав эту весеннюю песню, из своих норок.',
        textColor: '#fff',
        backgroundImage: './images/slide-bg.jpg',
        backgroundImageWebp: '',
        backgroundVideo: '',
        button: true,
        buttonLink: '#link',
        buttonText: 'Кнопка',
        buttonTextColor: '#fff',
        buttonBackground: 'transparent',
        buttonBorder: '2px solid #fff',
        buttonBackgroundHover: '#fff',
        buttonTextColorHover: '#000',
        parallaxInfo: true,
        colorNavigation: '#000',
        slideEffect: '', // backgroundMovement, pallaxMouseMove, backgroundVideo
      },
      {
        productId: false,
        productTitle: 'Велосипед Forward Sporting 3.0 Disc (2020) горный рам',
        productDescription: 'Купить Велосипед Forward Sporting 3.0 Disc (2020) горный рам.:19" кол.:27.5" черный 16.5кг (RBKW0MN7Q006) в интернет-магазине Ситилинк по доступной цене.',
        productPrice: '12000₽',
        productPriceColor: 'red',
        productImg: './images/bike.jpg',
        productLink: '#',
        title: 'ЗАГОЛОВОК СЛАЙДЕРА',
        titleTag: 'h1',
        titleColor: '#fff',
        titleAnimation: true,
        textAccent: 'Супер!',
        textAccentColor: 'rgb(36, 238, 53)',
        text: 'Далеко–далеко разносилась весенняя песня жаворонка по полям, по лугам и даже по лесным чащам. Заслышав эту весеннюю песню, из своих норок.',
        textColor: '#fff',
        backgroundImage: './images/slide-bg2.jpg',
        backgroundImageWebp: '',
        backgroundVideo: '',
        button: true,
        buttonLink: '#link',
        buttonText: 'Кнопка',
        buttonTextColor: '#fff',
        buttonBackground: 'transparent',
        buttonBorder: '2px solid #fff',
        buttonBackgroundHover: '#fff',
        buttonTextColorHover: '#000',
        parallaxInfo: true,
        colorNavigation: false,
        slideEffect: 'pallaxMouseMove', // backgroundMovement, pallaxMouseMove, backgroundVideo
      },
    ]
  });
  

  webasyst.active();
})



