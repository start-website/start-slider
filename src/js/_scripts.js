class StartSlider {
    constructor(props) {
        this.slider = document.querySelector(props.selector);
        this.sliderNumber = Number(props.sliderNumber);
        this.windowWidth = document.documentElement.clientWidth; 
        this.buttonsSwitchPos = props.buttonsSwitchPos;
        this.buttonsSwitchView = props.buttonsSwitchView;
        this.arrowsSwitchView = props.arrowsSwitchView;
        this.sliderWidth = props.sliderWidth;
        this.sliderHeight = props.sliderHeight;
        this.sliderMinHeight = props.sliderMinHeight;
        this.fontSize = props.fontSize;
        this.settings = props.slideSettings;
        this.borderRadius = props.borderRadius;
        this.marginTop = props.marginTop;
        this.marginRight = props.marginRight;
        this.marginLeft = props.marginLeft;
        this.marginBottom = props.marginBottom;
        this.slideAllArray = this.settings;
        this.slideIndex = 0;
        this.slidePosition = 0;
        this.slidesWidth = 0;
        this.slidesCount = 0;
        this.slideCountCopy = 0;
        this.slidesCountWithCopy = 0;
        this.slidesWidthCopy = 0;
        this.arrows = props.arrows;
        this.slidesAnimation = props.slidesAnimation;
        this.buttonsSwitches = props.buttonsSwitches;
        this.supportWebp = false;
        this.buttonClass = props.buttonClass;
        this.slideAutoPlay = props.autoPlay;
        this.slideAutoPlaySpeed = props.autoPlaySpeed;
        this.sliderElems = {
            slidesElem: '',
            slidesArr: [],
            buttonsSwitches: '',
            arrowsSwitches: '',
            indicatorElem: ''
        }

        this.view = {
            addElemSlider: function (slider, elem) {
                slider.appendChild(elem);
            },
        },

        this.model = {
            createSlide: function (slider, settings) {
                // return default value
                this.slideCountCopy = 0;
                this.slidesCountWithCopy = 0;
                this.slidesCount = 0;
                this.slideCountCopy = 0;
                this.sliderElems.slidesArr = [];
                this.sliderElems.slidesElem = [];
                this.slidePosition = 0;
                
                this.sliderWidth = this.slider.offsetWidth;
                this.slidePosition = 0 - this.sliderWidth;

                let tagSlides = document.createElement('div');
                tagSlides.className = 'slider-start__slides';

                const procentSlidesHeight = this.sliderHeight / 1500;
                const slidesHeight = document.documentElement.clientWidth * procentSlidesHeight;
                if (document.documentElement.clientWidth < 1500) {
                    tagSlides.style.height = `${slidesHeight}px`;
                } else {
                    tagSlides.style.height = `${this.sliderHeight}px`;
                }
                tagSlides.style.minHeight = `${this.sliderMinHeight}px`;

                let slideNumber = 1;
                const createSlidesElems = (slideIndex, copySlide) => {
                    this.slidesCountWithCopy++;
                    
                    let tagSlide = document.createElement('div');
                    tagSlide.className = copySlide ? 'slider-start__slide slider-start__slide-cloned' : 'slider-start__slide';
                    tagSlide.setAttribute('data-slide-number', slideNumber);
                    tagSlide.setAttribute('data-slide-type', settings[slideIndex].slideType);
                    tagSlide.style.width = this.sliderWidth + 'px';
                    if (this.borderRadius) tagSlide.style.borderRadius = `${this.borderRadius}px`;
                    if (slideIndex === 0 && !copySlide) tagSlides.style.transform = `translate3d(${this.slidePosition}px, 0, 0)`;
                    if (slideIndex === 0 && !copySlide) setTimeout(() => tagSlide.className += ' active', 10);
                    tagSlides.appendChild(tagSlide);

                    let tagSliderBackground = document.createElement('div');
                    tagSliderBackground.className = 'slider-start__bg';
                    if (settings[slideIndex].slideEffect) tagSliderBackground.setAttribute('data-animation', settings[slideIndex].slideEffect);
                    if (settings[slideIndex].backgroundImage) tagSliderBackground.style.backgroundImage = `url(${settings[slideIndex].backgroundImage})`;
                    if (settings[slideIndex].backgroundColor) tagSliderBackground.style.backgroundColor = settings[slideIndex].backgroundColor;
                    tagSlide.appendChild(tagSliderBackground);

                    if (copySlide) {
                        this.slideCountCopy++;
                    } else {
                        slideNumber = slideIndex + 1;
                        this.slidesCount++;
                        this.sliderElems.slidesArr.push(tagSlide);
                    }
                    
                    let tagContainerSlide = document.createElement('div');
                    tagContainerSlide.className = 'slider-start__container';
                    tagSlide.appendChild(tagContainerSlide);

                    let tagSlideContent = document.createElement('div');
                    tagSlideContent.className = 'slider-start__content';
                    tagContainerSlide.appendChild(tagSlideContent);

                    let tagSlideInfo = document.createElement('div');
                    tagSlideInfo.className = `slider-start__info ${settings[slideIndex].slideType}`;
                    if (settings[slideIndex].titleAnimation && /info-(1|2)/.test(settings[slideIndex].slideType)) tagSlideInfo.className += ' title-animation';
                    tagSlideContent.appendChild(tagSlideInfo);

                    switch (true) {
                        case /info-(1|2)/.test(settings[slideIndex].slideType):
                            if (settings[slideIndex].textAccent) {
                                let tagSlideTextAccent = document.createElement('span');
                                tagSlideTextAccent.className = 'slider-start__text-accent';
                                tagSlideTextAccent.style.color = settings[slideIndex].textAccentColor;
                                tagSlideTextAccent.innerHTML = settings[slideIndex].textAccent;
                                tagSlideInfo.appendChild(tagSlideTextAccent);
                            }

                            if (settings[slideIndex].timer) {
                                
                                this.supportFunctions.createTimer(tagSlideInfo, '', settings, slideIndex);
                            }

                            if (settings[slideIndex].title) {
                                let tagSlideTitle = document.createElement(this.settings[slideIndex].titleTag ? this.settings[slideIndex].titleTag : 'div');
                                tagSlideTitle.className = 'slider-start__title';
                                tagSlideTitle.style.color = settings[slideIndex].titleColor;
                                tagSlideTitle.innerHTML = settings[slideIndex].title;
                                tagSlideInfo.appendChild(tagSlideTitle);
                            }

                            if (settings[slideIndex].text) {
                                let tagSlideText = document.createElement('p');
                                tagSlideText.className = 'slider-start__text';
                                tagSlideText.style.color = settings[slideIndex].textColor;
                                tagSlideText.innerHTML = settings[slideIndex].text;
                                tagSlideInfo.appendChild(tagSlideText);
                            }

                            if (settings[slideIndex].buttonText1) {
                                let tagSlideButtonBox = document.createElement('div');
                                tagSlideButtonBox.className = 'slider-start__button-box';
                                tagSlideInfo.appendChild(tagSlideButtonBox);

                                let tagSlideButton1 = document.createElement('a');
                                tagSlideButton1.className = this.settings[slideIndex].buttonClass1 ? `slider-start__button ${settings[slideIndex].buttonClass1}` : 'slider-start__button start-slider-button-1';
                                tagSlideButton1.setAttribute('href', settings[slideIndex].buttonLink1);
                                tagSlideButton1.innerHTML = settings[slideIndex].buttonText1;
                                tagSlideButtonBox.appendChild(tagSlideButton1);

                                if (settings[slideIndex].buttonText2) {   
                                    let tagSlideButton2 = document.createElement('a');
                                    tagSlideButton2.className = settings[slideIndex].buttonClass2 ? `slider-start__button ${settings[slideIndex].buttonClass2}` : 'slider-start__button start-slider-button-2';
                                    tagSlideButton2.setAttribute('href', settings[slideIndex].buttonLink2);
                                    tagSlideButton2.innerHTML = settings[slideIndex].buttonText2;
                                    tagSlideButtonBox.appendChild(tagSlideButton2);
                                }
                            }
                            break;
                        
                        case /video/.test(settings[slideIndex].slideType):
                            let tagInfoLeft = document.createElement('div');
                            tagInfoLeft.className = 'slider-start__info-left';
                            tagSlideInfo.appendChild(tagInfoLeft);

                            let tagInfoRight = document.createElement('div');
                            tagInfoRight.className = 'slider-start__info-right';
                            tagSlideInfo.appendChild(tagInfoRight);

                            let tagInfoVideoDesk = document.createElement('div');
                            tagInfoVideoDesk.className = 'slider-start__info-video slider-start__info-video_desktop';
                            tagInfoRight.appendChild(tagInfoVideoDesk);

                            let tagInfoVideoMobile = document.createElement('div');
                            tagInfoVideoMobile.className = 'slider-start__info-video slider-start__info-video_mobile';
                            tagInfoLeft.appendChild(tagInfoVideoMobile);

                            if (settings[slideIndex].videoIframe) {
                                tagInfoVideoDesk.innerHTML = settings[slideIndex].videoIframe;
                                tagInfoVideoMobile.innerHTML = settings[slideIndex].videoIframe;
                            }

                            if (settings[slideIndex].textAccent) {
                                let tagSlideTextAccent = document.createElement('span');
                                tagSlideTextAccent.className = 'slider-start__text-accent';
                                tagSlideTextAccent.style.color = settings[slideIndex].textAccentColor;
                                tagSlideTextAccent.innerHTML = settings[slideIndex].textAccent;
                                tagInfoLeft.appendChild(tagSlideTextAccent);
                            }

                            if (settings[slideIndex].title) {
                                let tagSlideTitle = document.createElement(this.settings[slideIndex].titleTag ? this.settings[slideIndex].titleTag : 'div');
                                tagSlideTitle.className = 'slider-start__title';
                                tagSlideTitle.style.color = settings[slideIndex].titleColor;
                                tagSlideTitle.innerHTML = settings[slideIndex].title;
                                tagInfoLeft.appendChild(tagSlideTitle);
                            }

                            if (settings[slideIndex].text) {
                                let tagSlideText = document.createElement('p');
                                tagSlideText.className = 'slider-start__text';
                                tagSlideText.style.color = settings[slideIndex].textColor;
                                tagSlideText.innerHTML = settings[slideIndex].text;
                                tagInfoLeft.appendChild(tagSlideText);
                            }

                            if (settings[slideIndex].buttonText1) {
                                let tagSlideButtonBox = document.createElement('div');
                                tagSlideButtonBox.className = 'slider-start__button-box';
                                tagInfoLeft.appendChild(tagSlideButtonBox);

                                let tagSlideButton1 = document.createElement('a');
                                tagSlideButton1.className = this.settings[slideIndex].buttonClass1 ? `slider-start__button ${this.settings[slideIndex].buttonClass1}` : 'slider-start__button start-slider-button-1';
                                tagSlideButton1.setAttribute('href', settings[slideIndex].buttonLink1);
                                tagSlideButton1.innerHTML = settings[slideIndex].buttonText1;
                                tagSlideButtonBox.appendChild(tagSlideButton1);

                                if (settings[slideIndex].buttonText2) {   
                                    let tagSlideButton2 = document.createElement('a');
                                    tagSlideButton2.className = settings[slideIndex].buttonClass2 ? `slider-start__button ${settings[slideIndex].buttonClass2}` : 'slider-start__button start-slider-button-2';
                                    tagSlideButton2.setAttribute('href', settings[slideIndex].buttonLink2);
                                    tagSlideButton2.innerHTML = settings[slideIndex].buttonText2;
                                    tagSlideButtonBox.appendChild(tagSlideButton2);
                                }
                            }
                            break;

                        case /product/.test(settings[slideIndex].slideType):
                            if (settings[slideIndex].labelText) {
                                let tagLabel = document.createElement('div');
                                tagLabel.className = 'slider-start__label';
                                tagLabel.innerHTML = settings[slideIndex].labelText;
                                if (settings[slideIndex].labelColorText) tagLabel.style.color = settings[slideIndex].labelColorText;
                                if (settings[slideIndex].labelBackgroundColor) tagLabel.style.backgroundColor = settings[slideIndex].labelBackgroundColor;
                                tagSlideInfo.appendChild(tagLabel);
                            }
                            
                            let tagSlideProductImgBox = document.createElement('div');
                            tagSlideProductImgBox.className = 'slider-start__product-imgbox';
                            tagSlideInfo.appendChild(tagSlideProductImgBox);

                            let tagSlideProductImglink = document.createElement('a');
                            tagSlideProductImglink.setAttribute('href', settings[slideIndex].productLink);
                            tagSlideProductImgBox.appendChild(tagSlideProductImglink);

                            let tagSlideProductPicture = document.createElement('picture');
                            tagSlideProductImglink.appendChild(tagSlideProductPicture);

                            if (settings[slideIndex].productImgWebp) {
                                let tagSource = document.createElement('source');
                                tagSource.setAttribute('type', 'image/webp');
                                tagSource.setAttribute('srcset', settings[slideIndex].productImgWebp);
                                tagSlideProductPicture.appendChild(tagSource);
                            }

                            let tagSlideProductImg = document.createElement('img');
                            tagSlideProductImg.className = 'slider-start__product-imgbox_img';
                            tagSlideProductImg.setAttribute('src', settings[slideIndex].productImg);
                            tagSlideProductPicture.appendChild(tagSlideProductImg);

                            let tagSlideProductInfo = document.createElement('div');
                            tagSlideProductInfo.className = 'slider-start__product-info';
                            tagSlideInfo.appendChild(tagSlideProductInfo);

                            let tagSlideProductTitleLink = document.createElement('a');
                            tagSlideProductTitleLink.className = 'slider-start__product-link'
                            tagSlideProductTitleLink.setAttribute('href', settings[slideIndex].productLink);
                            tagSlideProductInfo.appendChild(tagSlideProductTitleLink);

                            let tagSlideProductTitle = document.createElement('div');
                            tagSlideProductTitle.className = 'slider-start__product-title';
                            tagSlideProductTitle.style.color = settings[slideIndex].titleColor;
                            tagSlideProductTitle.innerHTML = settings[slideIndex].productTitle;
                            tagSlideProductTitleLink.appendChild(tagSlideProductTitle);

                            let tagStars = document.createElement('div');
                            tagStars.className = 'slider-start__stars';
                            tagSlideProductInfo.appendChild(tagStars);

                            for (let starIndex = 0; starIndex < 5; starIndex++) {
                                let tagStar = document.createElement('span');
                                tagStar.className = starIndex >= Number(settings[slideIndex].valueStar) ? 'slider-start__star startwebsite-icon-star' : 'slider-start__star startwebsite-icon-star-active';
                                if (settings[slideIndex].colorStar) tagStar.style.color = settings[slideIndex].colorStar;
                                tagStars.appendChild(tagStar);
                            }

                            let tagSlideProductDescription = document.createElement('div');
                            tagSlideProductDescription.className = 'slider-start__product-description';
                            tagSlideProductDescription.style.color = settings[slideIndex].textColor;
                            tagSlideProductDescription.innerHTML = settings[slideIndex].productDescription;
                            tagSlideProductInfo.appendChild(tagSlideProductDescription);

                            let tagSlideProductPrices = document.createElement('div');
                            tagSlideProductPrices.className = 'slider-start__product-prices';
                            tagSlideProductInfo.appendChild(tagSlideProductPrices);

                            let tagSlideProductPrice = document.createElement('div');
                            tagSlideProductPrice.className = 'slider-start__product-prices_current';
                            tagSlideProductPrice.style.color = settings[slideIndex].productPriceColor;
                            tagSlideProductPrice.innerHTML = settings[slideIndex].productPrice;
                            tagSlideProductPrices.appendChild(tagSlideProductPrice);

                            if (settings[slideIndex].productPriceNew) {
                                let tagSlideProductPriceNew = document.createElement('div');
                                tagSlideProductPriceNew.className = 'slider-start__product-prices_new';
                                tagSlideProductPriceNew.style.color = settings[slideIndex].productPriceNewColor;
                                tagSlideProductPriceNew.innerHTML = settings[slideIndex].productPriceNew;
                                tagSlideProductPrices.appendChild(tagSlideProductPriceNew);

                                let tagSlideProductPriceNewBlacken = document.createElement('span');
                                tagSlideProductPriceNewBlacken.className = 'slider-start__product-prices_new-blacken';
                                tagSlideProductPriceNewBlacken.style.backgroundColor = settings[slideIndex].productPriceNewColorBlacken;
                                tagSlideProductPriceNew.appendChild(tagSlideProductPriceNewBlacken);
                            }

                            if (settings[slideIndex].buttonText1) {
                                let tagSlideProductButttonBox = document.createElement('div');
                                tagSlideProductButttonBox.className = 'slider-start__product-buttonbox';
                                tagSlideProductInfo.appendChild(tagSlideProductButttonBox);

                                let tagSlideProductButtton = document.createElement('a');
                                tagSlideProductButtton.className = this.settings[slideIndex].buttonClass ? `slider-start__button slider-start__product-button ${this.settings[slideIndex].buttonClass}` : 'slider-start__button slider-start__product-button start-slider-button-1';
                                tagSlideProductButtton.setAttribute('href', settings[slideIndex].productLink);
                                tagSlideProductButtton.innerHTML = settings[slideIndex].buttonText1;
                                tagSlideProductButttonBox.appendChild(tagSlideProductButtton);
                            }

                            if (settings[slideIndex].timer) {
                                this.supportFunctions.createTimer(tagSlideProductPrices, '', settings, slideIndex);
                            }
                            
                            break;
                         
                        case /banner/.test(settings[slideIndex].slideType):
                            let tagBannerLink = document.createElement('a');
                            tagBannerLink.className = 'slider-start__banner-link';
                            if (settings[slideIndex].buttonLink1) {
                                tagBannerLink.href = settings[slideIndex].buttonLink1;
                                let startX;
                                let endX;
                                tagBannerLink.addEventListener('click', (e) => {
                                    
                                    e.preventDefault();
                                })
                                tagBannerLink.addEventListener('mousedown', (e) => {
                                    startX = e.clientX;
                                    
                                })
                                tagBannerLink.addEventListener('mouseup', (e) => {
                                    endX = e.clientX;
                                })
                                tagBannerLink.addEventListener('click', (e) => {
                                    if (startX == endX) {
                                        window.location.href = settings[slideIndex].buttonLink1;
                                    }
                                })
                            } 
                            tagSlideInfo.appendChild(tagBannerLink);
                            break; 
                    }
                }

                settings.reverse();

                for (let slideIndex = 0; slideIndex < this.slideAllArray.length; slideIndex++) {
                    if (settings[slideIndex].slideActive) {
                        createSlidesElems(slideIndex, true);
                        break;
                    }
                }

                settings.reverse();
                
                for (let slideIndex = 0; slideIndex < this.slideAllArray.length; slideIndex++) {
                    if (settings[slideIndex].slideActive) {
                        createSlidesElems(slideIndex, false);
                    }
                }

                for (let slideIndex = 0; slideIndex < this.slideAllArray.length; slideIndex++) {
                    if (settings[slideIndex].slideActive) {
                        createSlidesElems(slideIndex, true);
                        break;
                    }
                }

                this.slidesWidth = this.sliderWidth * this.slidesCountWithCopy;
                this.slidesWidthCopy = this.sliderWidth * this.slideCountCopy;
                tagSlides.style.width = this.slidesWidth + 'px';

                this.slideIndex = 0;
                this.sliderElems.slidesElem = tagSlides;

                return tagSlides;
            },

            addEvent: function (elem, event, fn) {
                elem.addEventListener(event, (e) => {
                    fn(elem, e.target);
                });
            },

            createArrows: function () {
                let tagArrows = document.createElement('div');
                tagArrows.className = 'slider-start__arrows';
                tagArrows.setAttribute('data-arrow-view', this.arrowsSwitchView);

                let tagArrowPrev = document.createElement('span');
                tagArrowPrev.className = 'slider-start__arrows_prev start-icon-arrow-prev';

                let tagArrowNext = document.createElement('span');
                tagArrowNext.className = 'slider-start__arrows_next start-icon-arrow-next';

                tagArrows.appendChild(tagArrowPrev);
                tagArrows.appendChild(tagArrowNext);

                return tagArrows;
            },

            switchSlideArrow: function (arrows, target) {
                if (/slider-start__arrows_prev/.test(target.className)) {
                    this.supportFunctions.switchSlide('left');
                }

                if (/slider-start__arrows_next/.test(target.className)) {
                    this.supportFunctions.switchSlide('right');
                }
            },

            createButtonsSwitches: function (slider, slideCount) {
                let tagButtonsSwitches = document.createElement('div');
                tagButtonsSwitches.className = 'slider-start__buttons-switches';
                tagButtonsSwitches.setAttribute('data-buttons-view', this.buttonsSwitchView);

                function getButtonSwitchSize() {
                    const widthButtonsSwitches = slider.offsetWidth;
                    const buttonSwitchPaddindSide = slideCount * (5 * 2);
                    let buttonSwitchSize = (widthButtonsSwitches - buttonSwitchPaddindSide) / slideCount;

                    if (buttonSwitchSize > 60) buttonSwitchSize = 60;

                    return buttonSwitchSize;
                }
                const buttonSwitchSize = getButtonSwitchSize();

                for (let i = 0; i < slideCount; i++) {
                    let tagButtonSwitch = document.createElement('button');
                    tagButtonSwitch.setAttribute('role', 'button');
                    tagButtonSwitch.className = 'slider-start__button-switch';
                    if (/3|4/.test(this.buttonsSwitchView)) {
                        tagButtonSwitch.innerHTML = `<span style="max-width: ${buttonSwitchSize}px">${i +1}</span>`;
                    } else {
                       tagButtonSwitch.innerHTML = `<span style="max-width: ${buttonSwitchSize}px"></span>`; 
                    }
                    tagButtonsSwitches.appendChild(tagButtonSwitch);
                    if (i === 0) tagButtonSwitch.className = 'slider-start__button-switch slider-start__button-switch_active';
                }

                return tagButtonsSwitches;
            },

            switchSlideButton: function (buttons, target) {
                let buttonsArr = [...buttons.children];
                let indexButton;
                if (/slider-start__button-switch/.test(target.className)) {
                    indexButton = buttonsArr.indexOf(target);
                    this.supportFunctions.switchSlide('index', indexButton);
                }
                if (target.tagName && target.tagName === 'SPAN') {
                    indexButton = buttonsArr.indexOf(target.parentElement);
                    this.supportFunctions.switchSlide('index', indexButton);
                }
            },

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
                        for (let i = 0; i < this.sliderElems.slidesArr.length; i++) {
                            if (this.settings[i].backgroundImageWebp) {
                                this.sliderElems.slidesArr[i].children.forEach((child, index, array) => {
                                    if (/slider-start__bg/.test(child.className)) {
                                        child.style.backgroundImage = `url(${this.settings[i].backgroundImageWebp})`;
                                    }
                                })
                            }
                        }
                        this.supportWebp = result;
                    }
                })
            },

            switchDrag(elems, slides) {
                let startX;
                let changeX;

                elems.forEach(elem => {
                    const move = (e) => {
                        elem.style.cursor = 'grabbing';
                        changeX = this.slidePosition + (e.clientX - startX);
                        slides.style.transform = `translate3d(${changeX}px, 0, 0)`;
                    }

                    elem.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        
                        startX = e.clientX;
                        elem.addEventListener('mousemove', move);
                    })

                    elem.addEventListener('mouseup', () => {
                        let canSwitch = true;
                        elem.style.cursor = 'grab';
                        slides.style.transform = `translate3d(${this.slidePosition}px, 0, 0)`;
                        
                        if (changeX > (this.slidePosition + (this.sliderWidth / 7))) {
                            canSwitch = false;
                            this.supportFunctions.switchSlide('left');
                        }

                        if (changeX < (this.slidePosition - (this.sliderWidth / 7)) && canSwitch) {
                            this.supportFunctions.switchSlide('right');
                        }

                        elem.removeEventListener('mousemove', move)
                    })

                    elem.addEventListener('mouseenter', () => {
                        elem.style.cursor = 'grab';
                    })

                    elem.addEventListener('mouseleave', () => {
                        slides.style.transform = `translate3d(${this.slidePosition}px, 0, 0)`;
                        elem.removeEventListener('mousemove', move);
                    })
                })
            },

            switchSwipe(elem) {
                let touchStartX;
                let touchChangeX;
                let touchStartY;
                let touchChangeY;

                elem.addEventListener('touchstart', function (e) {
                    touchStartX = e.touches[0].clientX;
                    touchStartY = e.touches[0].clientY;
                })
                elem.addEventListener('touchmove', function (e) {
                    touchChangeX = touchStartX - e.touches[0].clientX;
                    touchChangeY = Math.ceil(touchStartY - e.touches[0].clientY);
                })

                elem.addEventListener('touchend', (e) => {
                    if (touchChangeY < 30 && touchChangeY > -30) {
                        if (touchChangeX > 15) {
                            this.supportFunctions.switchSlide('right');
                        }
                        if (touchChangeX < -15) {
                            this.supportFunctions.switchSlide('left');
                        }
                    }

                    touchChangeX = 0;
                })
            },

            controllSize(elem) {
                const elemWidth = elem.offsetWidth;
                const replaceClass = elem.className.replace(/ (small|middle|large)-start-slider/gi, '');
                elem.className = replaceClass;
                if (elemWidth <= 400) {
                    elem.className += ' small-start-slider';
                } else if (elemWidth <= 800 && elemWidth > 400) {
                    elem.className += ' middle-start-slider';
                } else {
                    elem.className += ' large-start-slider';
                }
            }
        },

        this.supportFunctions = {
            switchSlide: function (where, index, action) {
                let leftSwitch = false;
                let rightSwitch = false;
                if (where === 'left') {
                    leftSwitch = true;
                    if (this.slideIndex == 0) {
                        this.slideIndex = this.slidesCount;
                    }
                    this.slideIndex--;

                    const leftSlidePosition = this.slidePosition + this.sliderWidth;
                    this.slidePosition = leftSlidePosition;
                    if (leftSlidePosition > (0 - this.sliderWidth)) {
                        this.slidePosition = (0 - this.slidesWidth + this.slidesWidthCopy);
                    }
                }

                if (where === 'right') {
                    rightSwitch = true;
                    this.slideIndex++;
                    if (this.slideIndex > this.slidesCount -1) {
                        this.slideIndex = 0;
                    }

                    const rightSlidePosition = this.slidePosition - this.sliderWidth;
                    this.slidePosition = rightSlidePosition;

                    if (rightSlidePosition < (0 - this.slidesWidth + this.slidesWidthCopy)) {
                        this.slidePosition = 0 - this.sliderWidth;
                    }

                }

                if (where === 'index') {
                    this.slideIndex = index;
                    this.slidePosition = 0 - (this.sliderWidth * (index + 1));
                }

                // Remove and show buttons
                if (this.sliderElems.buttonsSwitches) {
                    const buttonsSwitchesArray = [...this.sliderElems.buttonsSwitches.children];
                    for (let i = 0; i < buttonsSwitchesArray.length; i++) {
                        buttonsSwitchesArray[i].className = 'slider-start__button-switch';
                    }
                    buttonsSwitchesArray[this.slideIndex].className += ' slider-start__button-switch_active';
                }

                // Remove and show active slides
                for (let i = 0; i < this.sliderElems.slidesArr.length; i++) {
                    const classWithOutActive = this.sliderElems.slidesArr[i].className.replace(/(\s|)active/gi, '');
                    this.sliderElems.slidesArr[i].className = classWithOutActive;
                }
                this.sliderElems.slidesArr[this.slideIndex].className += ' active';
                this.sliderElems.slidesElem.style.transform = `translate3d(${this.slidePosition}px, 0, 0)`;
                this.sliderElems.slidesElem.setAttribute('data-slides-animation', this.slidesAnimation);
                if (this.slideIndex == 0 && rightSwitch) {
                    this.sliderElems.slidesElem.style.transition = 'none';
                }
                if (this.slideIndex == (this.slidesCount -1) && leftSwitch) {
                    this.sliderElems.slidesElem.style.transition = 'none';
                }
                this.sliderElems.slidesElem.addEventListener('transitionend', () => {
                    this.sliderElems.slidesElem.style.transition = '';
                    this.sliderElems.slidesElem.removeAttribute('data-slides-animation');
                })

                if (this.arrows) this.supportFunctions.changeColorElemsNavigation(this.slideIndex, 'arrows');
                if (this.buttonsSwitches) this.supportFunctions.changeColorElemsNavigation(this.slideIndex, 'buttons');
                if (this.slideAutoPlay) {
                    this.supportFunctions.addSlideAutoPlay();
                    this.supportFunctions.changeColorElemsNavigation(this.slideIndex, 'indicator');
                } 

                this.supportFunctions.addSliderEffects();
            },

            changeColorElemsNavigation(slideIndex = 1, elem) {
                const arrowsSwitches = this.sliderElems.arrowsSwitches;
                const buttonsSwitchesArr = this.sliderElems.buttonsSwitches.children;
                let currentIndexSlide = this.sliderElems.slidesArr.indexOf(this.sliderElems.slidesArr[slideIndex])

                    if (currentIndexSlide == slideIndex) {
                        if (elem === 'arrows') arrowsSwitches.style.color = this.settings[slideIndex].colorNavigation;
                        if (elem === 'buttons') {
                            buttonsSwitchesArr.forEach(button => {
                                button.lastChild.style.backgroundColor = this.settings[slideIndex].colorNavigation;
                                if (this.buttonsSwitchView === '4') {
                                    button.lastChild.style.color = this.settings[slideIndex].colorNavigation;
                                    button.lastChild.style.borderColor = this.settings[slideIndex].colorNavigation;
                                } 
                            })
                        } 
                        if (elem === 'indicator') {
                            this.sliderElems.indicatorElem.firstChild.firstChild.style.backgroundColor = this.settings[slideIndex].colorNavigation;
                        }
                    }
            },

            addSliderEffects: function () {
                for (let i = 0; i < this.settings.length; i++) {
                    if (this.settings[i].slideActive) {
                       setTimeout(() => {
                            if (/parallax-text/gi.test(this.settings[i].slideEffect) && /active/gi.test(this.sliderElems.slidesArr[i].className)) this.supportFunctions.addParallaxInfo(i);
                            if (/background-movement-()/gi.test(this.settings[i].slideEffect) && /active/gi.test(this.sliderElems.slidesArr[i].className)) this.supportFunctions.addBackgroundMovement(i);
                            if (this.settings[i].slideEffect === 'pallaxMouseMove' && /active/gi.test(this.sliderElems.slidesArr[i].className)) this.supportFunctions.addParallaxMouseMove(i);
                            if (this.settings[i].slideEffect === 'backgroundVideo' && /active/gi.test(this.sliderElems.slidesArr[i].className)) this.supportFunctions.addBackgroundVideo(i);
                            if (/info-/gi.test(this.settings[i].slideType) && this.settings[i].titleAnimation && /active/gi.test(this.sliderElems.slidesArr[i].className)) this.supportFunctions.addTitleAnimation(i); 
                        }, 11) 
                    }
                }  
            },

            addSlideAutoPlay() {
                const indicatorElem = this.sliderElems.indicatorElem;
                let indicatorSize = 0;

                if (indicatorElem) {
                    this.slider.removeChild(indicatorElem);
                }

                let tagIndicator = document.createElement('div');
                tagIndicator.className = 'slider-start__indicator';

                let tagIndicatorLines = document.createElement('div');
                tagIndicatorLines.className = 'slider-start__indicator-lines';

                let tagIndicatorLineTop = document.createElement('div'); 
                tagIndicatorLineTop.className = 'slider-start__indicator-lines_top';

                let tagIndicatorLineBottom = document.createElement('div');
                tagIndicatorLineBottom.className = 'slider-start__indicator-lines_bottom';

                this.slider.appendChild(tagIndicator);
                tagIndicator.appendChild(tagIndicatorLines);
                tagIndicatorLines.appendChild(tagIndicatorLineTop);
                tagIndicatorLines.appendChild(tagIndicatorLineBottom);

                this.sliderElems.indicatorElem = tagIndicator;
                
                const timeIndicator = setInterval(() => {
                    if (indicatorSize < 100) {
                        indicatorSize += 100 / (this.slideAutoPlaySpeed * 10);
                    }

                    this.sliderElems.indicatorElem.lastChild.firstChild.style.width = `${indicatorSize}%`;

                    if (this.sliderElems.buttonsSwitches) {
                        this.sliderElems.buttonsSwitches.children.forEach(button => {
                        button.addEventListener('click', () => {
                                clearInterval(timeIndicator);
                            })
                        })
                    }

                    window.addEventListener('resize', () => {
                        const windowWidthNow = document.documentElement.clientWidth;
                        if (this.windowWidth !== windowWidthNow) {
                            clearInterval(timeIndicator);
                        }
                    })

                    if (this.arrows) {
                        this.sliderElems.arrowsSwitches.children.forEach(arrow => {
                            arrow.addEventListener('click', () => {
                                clearInterval(timeIndicator);
                            })
                        })
                    }
                    
                    this.slider.addEventListener('touchend', () => {
                        clearInterval(timeIndicator);
                    })

                    this.slider.addEventListener('mouseup', () => {
                        clearInterval(timeIndicator);
                    })
                    
                    if (indicatorSize >= 100) {
                        clearInterval(timeIndicator);
                        this.supportFunctions.switchSlide('right', '', timeIndicator);
                    }
                }, 100);

            },

            addParallaxInfo(slideIndex = 0) {
                let sliderInfoArray = [];

                const findInfo = (elems) => {
                     elems.forEach(elem => {
                        if (/slider-start__info/gi.test(elem.className)) {
                            sliderInfoArray.push(elem);
                            return true;
                        } else {
                            findInfo(elem.children);
                        }
                    })
                }

                findInfo(this.sliderElems.slidesArr);

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

            },

            addBackgroundMovement(slideIndex) {
                let slideBG;
                this.sliderElems.slidesArr[slideIndex].children.forEach(slideChild => {
                    if (slideChild.getAttribute('data-animation')) {
                        slideBG = slideChild;
                        slideBG.removeAttribute('data-animation');
                    }
                    
                })
                setTimeout(() => {
                    slideBG.setAttribute('data-animation', this.settings[slideIndex].slideEffect);
                }, 10)
                
            },

            addParallaxMouseMove(slideIndex) {
                const viewportLarge = window.innerWidth > 950 ? true : false;
                let slideBG;

                this.sliderElems.slidesArr[slideIndex].children.forEach((child, index, array) => {
                    if (/slider-start__bg/.test(child.className)) {
                        slideBG = child;
                    }
                })
                
                const BGmove = (e) => {
                    slideBG.style.backgroundPosition = `-${(e.pageX * 0.06)}px -${(e.pageY * 0.06)}px`;
                }

                const changeSliderBackground = (fn) => {
                    slideBG.style.backgroundSize = '';
                    slideBG.style.backgroundPosition = '0 0';
                    fn();
                }

                if (viewportLarge) {
                    changeSliderBackground(() => {
                        slideBG.style.backgroundSize = 'calc(100% + 150px)';
                        this.sliderElems.slidesArr[slideIndex].addEventListener('mousemove', BGmove);
                    })
                }
            },

            addBackgroundVideo(slideIndex) {
                let sliderBackgroundVideo;
                let sliderBG;

                this.sliderElems.slidesArr[slideIndex].children.forEach(elem => {
                    if (/slider-start__bg/gi.test(elem.className)) sliderBG = elem;
                    sliderBG.children.forEach((child) => {
                        if (/slider-start__video-bg/.test(child.className)) {
                            sliderBackgroundVideo = child;
                            sliderBG.removeChild(sliderBackgroundVideo);
                        } 
                    })
                    
                })

                const tagVideoMinHeight = this.slider.offsetHeight * 2;

                let tagVideo = document.createElement('video');
                tagVideo.className = 'slider-start__video-bg';
                tagVideo.style.minWidth = `${tagVideoMinHeight}px`;
                
                tagVideo.setAttribute('autoplay', '');
                tagVideo.setAttribute('preload', 'metadata');
                tagVideo.setAttribute('muted', '');
                tagVideo.setAttribute('loop', '');

                sliderBG.appendChild(tagVideo);
                tagVideo.setAttribute('src', this.settings[slideIndex].backgroundVideo);
            },

            addTitleAnimation(slideIndex) {
                let titleText = this.settings[slideIndex].title;
                let titleElem;
                let slideLettersArray = [];

                const fintTitleELem = (elems) => {
                    elems.forEach((elem, index, array) => {
                        if (/slider-start__title/gi.test(elem.className)) {
                           titleElem = elem;
                        } else {
                            fintTitleELem(elem.children)
                        }
                    })
                }

                fintTitleELem(this.sliderElems.slidesArr[slideIndex].children)

                const titleAnimation = () => {
                    titleElem.innerHTML = '';
                    const titleWords = titleText.split(' ');

                    for (let i = 0; i < titleWords.length; i++) {
                        let tagTitleWord = document.createElement('div');
                        tagTitleWord.className = 'slider-start__title-word';
                        titleElem.appendChild(tagTitleWord);

                        for (let k = 0; k < titleWords[i].length; k++) {
                            let tagTitleLetter = document.createElement('span');
                            tagTitleLetter.className = 'slider-start__title-letter';
                            tagTitleLetter.innerText = titleWords[i][k];
                            slideLettersArray.push(tagTitleLetter);
                            tagTitleWord.appendChild(tagTitleLetter);
                        }
                    }

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
                }

                titleAnimation();
            },

            createTimer(elem, addClass, settings, slideIndex) {
                const distanceEndHtml = '<span class="slider-start__timer_days">' + '00' + '</span>' +
                    '<span class="slider-start__timer_hours">' + '00' + '</span>' +
                    '<span class="slider-start__timer_minutes">' + '00' + '</span>' +
                    '<span class="slider-start__timer_seconds">' + '00';
        
                let tagTimer = document.createElement('div');
                tagTimer.className = addClass ? `slider-start__timer ${addClass}` : 'slider-start__timer';
                tagTimer.innerHTML = distanceEndHtml;
                if (settings[slideIndex].timerColor) tagTimer.style.color = settings[slideIndex].timerColor;
                elem.appendChild(tagTimer);
        
                let countDowndate = new Date(settings[slideIndex].timer).getTime();
                let countDownFunction = setInterval(function () {
                    let now = new Date().getTime();
                    let distance = countDowndate - now;
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                    let htmlDays = '<span class="slider-start__timer_days">' + days + '</span>';
                    let htmlHours = '<span class="slider-start__timer_hours">' + hours + '</span>';
                    let htmlMinutes = '<span class="slider-start__timer_minutes">' + minutes + '</span>';
                    let htmlSeconds = '<span class="slider-start__timer_seconds">' + seconds;
        
                    if (days < 10) htmlDays = '<span class="slider-start__timer_days">' + '0' + days + '</span>';
                    if (hours < 10) htmlHours = '<span class="slider-start__timer_hours">' + '0' + hours + '</span>';
                    if (minutes < 10) htmlMinutes = '<span class="slider-start__timer_minutes">' + '0' + minutes + '</span>';
                    if (seconds < 10) htmlSeconds = '<span class="slider-start__timer_seconds">' + '0' + seconds;
        
                    tagTimer.innerHTML = htmlDays + htmlHours + htmlMinutes + htmlSeconds;
        
                    if (distance < 0) {
                        clearInterval(countDownFunction);
                        tagTimer.innerHTML = distanceEndHtml;
                    }
                }, 1000);
            }
        },

        this.controller = {
            addSliderElements: function () {
                if (this.slider) {
                    if (this.sliderWidth) {
                        this.slider.style.maxWidth = this.sliderWidth + 'px';
                    }
                    if (this.buttonsSwitchPos) this.slider.setAttribute('data-buttonswitch-position', this.buttonsSwitchPos);
                    if (this.marginTop) this.slider.style.marginTop = `${this.marginTop}px`;
                    if (this.marginLeft) this.slider.style.marginLeft = `${this.marginLeft}px`;
                    if (this.marginRight) this.slider.style.marginRight = `${this.marginRight}px`;
                    if (this.marginBottom) this.slider.style.marginBottom = `${this.marginBottom}px`;
                    if (this.fontSize) this.slider.style.fontSize = `${this.fontSize}px`;

                    let slides = this.model.createSlide(this.slider, this.settings);                       

                    this.view.addElemSlider(this.slider, slides);
     
                    window.addEventListener('resize', () => {
                        const windowWidthNow = document.documentElement.clientWidth;
                        if (this.windowWidth !== windowWidthNow) {
                            this.slider.removeChild(slides);
                            slides = this.model.createSlide(this.slider, this.settings);
                            this.slider.appendChild(slides);
                        }
                        
                    })
                }

                if (this.buttonsSwitches) {
                    let buttonsSwitches = this.model.createButtonsSwitches(this.slider, this.slidesCount);
                    this.view.addElemSlider(this.slider, buttonsSwitches);

                    this.sliderElems.buttonsSwitches = buttonsSwitches;

                    this.model.addEvent(this.sliderElems.buttonsSwitches, 'click', this.model.switchSlideButton);
                    this.supportFunctions.changeColorElemsNavigation(0, 'buttons');
 
                    window.addEventListener('resize', () => {
                        const windowWidthNow = document.documentElement.clientWidth;
                        if (this.windowWidth !== windowWidthNow) {
                             this.slider.removeChild(buttonsSwitches);
                            buttonsSwitches = this.model.createButtonsSwitches(this.slider, this.slidesCount);
                            this.sliderElems.buttonsSwitches = buttonsSwitches;
                            this.slider.appendChild(this.sliderElems.buttonsSwitches);
                            this.supportFunctions.changeColorElemsNavigation(0, 'buttons');
                            this.model.addEvent(this.sliderElems.buttonsSwitches, 'click', this.model.switchSlideButton);
                        }
                       
                    })
                }

                if (this.arrows) {
                    const arrowsSwitches = this.model.createArrows(this.slider);
                    this.view.addElemSlider(this.slider, arrowsSwitches);

                    this.sliderElems.arrowsSwitches = arrowsSwitches;
                    this.model.addEvent(this.sliderElems.arrowsSwitches, 'click', this.model.switchSlideArrow);
                    this.supportFunctions.changeColorElemsNavigation(0, 'arrows');

                    window.addEventListener('resize', () => {
                        const windowWidthNow = document.documentElement.clientWidth;
                        if (this.windowWidth !== windowWidthNow) {
                            this.supportFunctions.changeColorElemsNavigation(0, 'arrows');
                        }
                        
                    })
                }

                if (this.slideAutoPlay) {
                    this.supportFunctions.addSlideAutoPlay();
                    this.supportFunctions.changeColorElemsNavigation(0, 'indicator');
                }
            },

            sliderСontrol: function () {
                this.model.switchDrag(this.sliderElems.slidesArr, this.sliderElems.slidesElem);
                this.model.switchSwipe(this.slider);
                this.supportFunctions.addSliderEffects();
                this.model.controllSize(this.slider);

                window.addEventListener('resize', () => {
                    const windowWidthNow = document.documentElement.clientWidth;
                    if (this.windowWidth !== windowWidthNow) {
                        this.model.switchDrag(this.sliderElems.slidesArr, this.sliderElems.slidesElem);
                        this.supportFunctions.addSliderEffects();
                        this.model.controllSize(this.slider);
                    }
                    
                })
            },

            changeSlider: function () {
                this.model.changeToWebp();
                window.addEventListener('resize', () => {
                    const windowWidthNow = document.documentElement.clientWidth;
                    if (this.windowWidth !== windowWidthNow) {
                        this.model.changeToWebp();
                    }
                })
            },
        },

        this.app = {
            init: function () {
                this.app.context.call(this);
                this.app.main.call(this);
            },

            context: function () {
                for (let key in this.view) {
                    if (typeof this.view[key] == 'function') {
                        this.view[key] = this.view[key].bind(this);
                    }
                }

                for (let key in this.model) {
                    if (typeof this.model[key] == 'function') {
                        this.model[key] = this.model[key].bind(this);
                    }
                }

                for (let key in this.supportFunctions) {
                    if (typeof this.supportFunctions[key] == 'function') {
                        this.supportFunctions[key] = this.supportFunctions[key].bind(this);
                    }
                }

                for (let key in this.controller) {
                    if (typeof this.controller[key] == 'function') {
                        this.controller[key] = this.controller[key].bind(this);
                    }
                }
            },

            main: function () {
                const preload = document.querySelector(`[data-slider-preloader="${this.sliderNumber}"]`);
                this.slider.removeChild(preload);

                this.controller.addSliderElements();
                this.controller.sliderСontrol();
                this.controller.changeSlider();
            },
        }

        this.app.init.call(this);
    }
}

window.addEventListener('load', function () {
    const startSliderSettings = {
        selector: '[data-slider-number="1"]',
        buttonsSwitchPos: 'out', // out, right, left, bottom
        buttonsSwitchView: '5', // 1-4
        arrowsSwitchView: '2', // 1-2
        sliderNumber: '1',
        sliderWidth: '',
        sliderHeight: '600',
        sliderMinHeight: '600',
        fontSize: '16',
        arrows: true,
        buttonsSwitches: true,
        marginTop: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '0',
        autoPlay: false,
        autoPlaySpeed: 10,
        slidesAnimation: 'transition',
        borderRadius: '',
        slideSettings: [
            {
                slideType: 'info-1', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'START SLIDER',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '2022-1-04 23:55',
                timerColor: '', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Slider with many parallax effects',
                textColor: '',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/bg11.jpeg',
                //backgroundImageWebp: './images/slide-bg2.webp',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#ccc',
                slideEffect: '', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'info-1', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'BACKGROUND MOVEMENT',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '',
                timerColor: '', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Parallax effect of background image movement',
                textColor: '',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/sunset.jpg',
                backgroundImageWebp: './images/sunset.webp',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: '',
                buttonClass2: '',
                colorNavigation: '#ccc',
                slideEffect: 'background-movement-left', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, backgroundVideo
            },
            {
                slideType: 'info-1', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'PARALLAX MOUSE',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '',
                timerColor: '', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Parallax effect of moving the background image when moving the cursor on desktop',
                textColor: '',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/space.jpg',
                backgroundImageWebp: './images/space.webp',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: '',
                buttonClass2: '',
                colorNavigation: '#ccc',
                slideEffect: 'pallaxMouseMove', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'info-1', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'BACKGROUND VIDEO',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '',
                timerColor: '', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Video slide background',
                textColor: '',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                // backgroundImage: './images/space.jpg',
                // backgroundImageWebp: './images/space.webp',
                backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: '',
                buttonClass2: '',
                colorNavigation: '#ccc',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'info-1', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'Parallax text',
                titleTag: 'h1',
                titleColor: '#111',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: 'red',
                timer: '',
                timerColor: '', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Parallax effect when scrolling a page',
                textColor: '#111',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/iphone.jpg',
                backgroundImageWebp: './images/iphone.webp',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: '',
                buttonClass2: '',
                colorNavigation: '#111',
                slideEffect: 'parallax-text', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'info-1', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'CHANGE BACKGROUND COLOR',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                //textAccent: 'Super!',
                textAccentColor: 'red',
                timer: '',
                timerColor: '', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                //text: 'Parallax effect when scrolling a page',
                textColor: '#111',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                // backgroundImage: './images/iphone.jpg',
                // backgroundImageWebp: './images/iphone.webp',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: '',
                buttonClass2: '',
                colorNavigation: '#ccc',
                slideEffect: 'background-movement-color-change', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
        ]
    };
    new StartSlider(startSliderSettings);

    const startSliderSettings2 = {
        selector: '[data-slider-number="2"]',
        buttonsSwitchPos: 'left', // out, right, left, bottom
        buttonsSwitchView: '2', // 1-4
        arrowsSwitchView: '1', // 1-2
        sliderNumber: '2',
        sliderWidth: '900',
        sliderHeight: '500',
        sliderMinHeight: '360',
        fontSize: '16',
        arrows: true,
        marginTop: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '20',
        buttonsSwitches: true,
        autoPlay: false,
        autoPlaySpeed: 10,
        slidesAnimation: 'transition',
        borderRadius: '10',
        fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
        slideSettings: [
            {
                slideType: 'info-2', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                // productImg: './images/bg33.jpeg',
                // productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'SLIDER HEADER',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#fff',
                //timer: '2021-12-04 23:55',
                timerColor: 'red', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: '',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/bg33.jpeg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: 'https://yandex.ru/',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#999',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'info-2', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                // productImg: './images/bg33.jpeg',
                // productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'SLIDER HEADER',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#fff',
                //timer: '2021-12-04 23:55',
                timerColor: 'red', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: '',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/bg33.jpeg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: 'https://yandex.ru/',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#999',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
 
        ]
    };
    new StartSlider(startSliderSettings2);

    const startSliderSettings3 = {
        selector: '[data-slider-number="3"]',
        buttonsSwitchPos: 'left', // out, right, left, bottom
        buttonsSwitchView: '4', // 1-4
        arrowsSwitchView: '1', // 1-2
        sliderNumber: '3',
        sliderWidth: '400',
        sliderHeight: '500',
        sliderMinHeight: '360',
        fontSize: '16',
        arrows: true,
        marginTop: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '0',
        buttonsSwitches: true,
        autoPlay: false,
        autoPlaySpeed: 10,
        slidesAnimation: 'transition',
        borderRadius: '10',
        fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
        slideSettings: [
            {
                slideType: 'product', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo product',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#111',
                productPriceNewColor: '#777',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'SLIDER HEADER',
                titleTag: 'div',
                titleColor: '#333',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '2021-12-04 23:55',
                timerColor: '#333', 
                labelText: 'New',
                labelColorText: '',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: '#333',
                colorStar: '#24ee35',
                valueStar: '5',
                backgroundColor: '#333',
                backgroundImage: './images/bg44.jpeg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#000',
                slideEffect: '', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'product', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo product',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#111',
                productPriceNewColor: '#777',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'SLIDER HEADER',
                titleTag: 'div',
                titleColor: '#333',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '2021-12-04 23:55',
                timerColor: '#333', 
                labelText: 'New',
                labelColorText: '',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: '#333',
                colorStar: '#24ee35',
                valueStar: '5',
                backgroundColor: '#333',
                backgroundImage: './images/bg44.jpeg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#000',
                slideEffect: '', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
        ]
    };
    new StartSlider(startSliderSettings3);

    const startSliderSettings4 = {
        selector: '[data-slider-number="4"]',
        buttonsSwitchPos: 'center', // out, right, left, bottom
        buttonsSwitchView: '3', // 1-4
        arrowsSwitchView: '1', // 1-2
        sliderNumber: '4',
        sliderWidth: '',
        sliderHeight: '600',
        sliderMinHeight: '600',
        fontSize: '16',
        arrows: true,
        marginTop: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '0',
        buttonsSwitches: true,
        autoPlay: false,
        autoPlaySpeed: 10,
        slidesAnimation: 'transition',
        borderRadius: '',
        fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
        slideSettings: [
            {
                slideType: 'video', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'YOUTUBE VIDEO',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: 'red',
                timer: '2021-12-04 23:55',
                timerColor: 'red', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: '',
                colorStar: '#24ee35',
                valueStar: '4',
                backgroundColor: '#ccc',
                backgroundImage: './images/bg55.jpeg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: 'https://yandex.ru/',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#A0E7E5',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'video', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'YOUTUBE VIDEO',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: 'red',
                timer: '2021-12-04 23:55',
                timerColor: 'red', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: '',
                colorStar: '#24ee35',
                valueStar: '4',
                backgroundColor: '#ccc',
                backgroundImage: './images/bg55.jpeg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: '#',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#A0E7E5',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
 
        ]
    };
    new StartSlider(startSliderSettings4);

    const startSliderSettings5 = {
        selector: '[data-slider-number="5"]',
        buttonsSwitchPos: 'bottom', // out, right, left, bottom
        buttonsSwitchView: '1', // 1-4
        arrowsSwitchView: '1', // 1-2
        sliderNumber: '5',
        sliderWidth: '',
        sliderHeight: '200',
        sliderMinHeight: '200',
        fontSize: '16',
        arrows: true,
        marginTop: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '0',
        buttonsSwitches: true,
        autoPlay: false,
        autoPlaySpeed: 10,
        slidesAnimation: 'transition',
        borderRadius: '',
        fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
        slideSettings: [
            {
                slideType: 'banner', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'SLIDER HEADER',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '2021-12-04 23:55',
                timerColor: 'red', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: 'red',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/banner.jpg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: 'https://yandex.ru/',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#333',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
            {
                slideType: 'banner', // product, info-1, info-2, banner, video
                slideActive: true,
                productTitle: 'Demo item',
                productDescription: 'Product description Product description Product description Product description Product description',
                productPrice: '12000$',
                productPriceNew: '9000$',
                productPriceColor: '#58E000',
                productPriceNewColor: '#ccc',
                productPriceNewColorBlacken: 'red',
                productImg: './images/iphone12.png',
                productImgWebp: './images/iphone12.webp',
                productLink: '#',
                title: 'SLIDER HEADER',
                titleTag: 'h1',
                titleColor: '#fff',
                titleAnimation: true,
                textAccent: 'Super!',
                textAccentColor: '#24ee35',
                timer: '2021-12-04 23:55',
                timerColor: 'red', 
                labelText: 'New',
                labelColorText: 'white',
                labelBackgroundColor: 'black',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
                textColor: 'red',
                colorStar: 'blue',
                valueStar: '4',
                backgroundColor: '#000',
                backgroundImage: './images/banner.jpg',
                backgroundImageWebp: '',
                //backgroundVideo: './images/cover-video.mp4',
                videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                buttonLink1: 'https://yandex.ru/',
                buttonText1: 'Button',
                buttonClass1: '',
                buttonLink2: '#link',
                buttonText2: 'Button',
                buttonClass2: '',
                colorNavigation: '#333',
                slideEffect: 'backgroundVideo', // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 
            },
 
        ]
    };
    new StartSlider(startSliderSettings5);
})

