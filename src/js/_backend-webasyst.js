function checkboxChange() {
  const inputsCheckbox = document.querySelectorAll('input[type="checkbox"]');
  let attrValueChecked;
  for (let i = 0; i < inputsCheckbox.length; i++) {
    inputsCheckbox[i].addEventListener('change', function () {
      inputsCheckbox[i].parentElement.parentElement.childNodes.forEach(function (elem) {
        if (elem.tagName === 'LABEL') {
          if (elem.firstChild.hasAttribute('checked')) {
            attrValueChecked = elem.firstChild.getAttribute('name');
          }
          elem.firstChild.checked = false;
          elem.firstChild.removeAttribute('checked');
          elem.firstChild.setAttribute('name', 'option');
        }
      })
      this.setAttribute('checked', '');
      this.checked = true;
      this.setAttribute('name', attrValueChecked);
    })
  }
}

function selectChange(tabIndex = 0) {
  const selectArray = document.querySelectorAll('.slide_type');
  const fieldProductArray = document.querySelectorAll('.field-product');
  const fieldInfoArray = document.querySelectorAll('.field-info');


  function choiceProduct() {
    for (let i = 0; i < fieldProductArray.length; i++) {
      fieldProductArray[i].style.display = '';
    }
    for (let i = 0; i < fieldInfoArray.length; i++) {
      fieldInfoArray[i].style.display = 'none';
    }
  }

  function choiceInfo() {
    for (let i = 0; i < fieldInfoArray.length; i++) {
      fieldInfoArray[i].style.display = '';
    }
    for (let i = 0; i < fieldProductArray.length; i++) {
      fieldProductArray[i].style.display = 'none';
    }
  }

  function setChoice(indexSelectedOption) {
    switch (indexSelectedOption) {
      case 0:
        choiceProduct();
        break;
      case 1:
        choiceInfo();
        break;
    }
  }
  try {
    setChoice(selectArray[tabIndex].selectedIndex);
  } catch (error) {
    console.error(error);
  }

  for (let i = 0; i < selectArray.length; i++) {
    selectArray[i].addEventListener('change', function () {
      try {
        setChoice(selectArray[tabIndex].selectedIndex);
      } catch (error) {
        console.error(error);
      }
    })
  }

}

function tabsSwitch() {
  const tabButtonArray = document.querySelectorAll('.sliderStart__tab-button');
  const tabContentArray = document.querySelectorAll('.sliderStart__tab-content');
  const inputArrayCheckbox = document.querySelectorAll('input[type="checkbox"]');

  const addTab = document.querySelector('.sliderStart__addtab-button');
  const delTab = document.querySelector('.sliderStart__deltab-button');

  let numberSlides = 0;
  let slideDisablePosition = 0;

  (function () {
    for (let i = inputArrayCheckbox.length - 1; i > 0; i--) {
      if (inputArrayCheckbox[i].name.match(/slide_active_/) && inputArrayCheckbox[i].checked) {
        numberSlides++;
        label:
        if (inputArrayCheckbox[i].value === 'false') {
          slideDisablePosition++;
        } else {
          break label;
        }
      }
    }
  })()

  let slidesCount = numberSlides - slideDisablePosition;

  function activeSlide(i = 0, action) {
    const fieldActiveSlideArray = document.querySelectorAll('.field-active-slide');
    function findInput(elements) {
      elements.forEach(function (elem) {
        if (elem.tagName === 'INPUT') {
          switch (action) {
            case 'active':
              elem.checked = false;
              elem.removeAttribute('checked');
              if (elem.getAttribute('value') === 'true') {
                elem.checked = true;
                elem.setAttribute('checked', '');
              }
              break;
            case 'disable':
              elem.checked = false;
              elem.removeAttribute('checked');
              if (elem.getAttribute('value') === 'false') {
                elem.checked = true;
                elem.setAttribute('checked', '');
              }
              break;
          }

          return false;
        } else {
          findInput(elem.childNodes)
        }
      })
    }
    try {
      findInput(fieldActiveSlideArray[i].childNodes);
    } catch (error) {
      console.error(error);
    }
  }

  function regulateNumberSlides(value = 5, action = 'close') {
    if (action === 'close') {
      for (let i = value; i < tabButtonArray.length; i++) {
        tabButtonArray[i].style.display = 'none';
      }
    }
    if (action === 'add') tabButtonArray[value].style.display = '';
    if (action === 'del') tabButtonArray[value].style.display = 'none';
  }
  regulateNumberSlides(slidesCount, 'close');

  delTab.addEventListener('click', function () {
    if (slidesCount > 1) {
      slidesCount--;
      regulateNumberSlides(slidesCount, 'del');
      activeSlide(slidesCount, 'disable');
    }
  })

  addTab.addEventListener('click', function () {
    if (slidesCount < tabButtonArray.length) {
      regulateNumberSlides(slidesCount, 'add');
      activeSlide(slidesCount, 'active');
      slidesCount++;
    }
  })

  function removeActive() {
    for (let i = 0; i < tabButtonArray.length; i++) {
      tabButtonArray[i].className = 'sliderStart__tab-button';
      tabContentArray[i].className = 'sliderStart__tab-content';
    }
  }

  for (let i = 0; i < tabButtonArray.length; i++) {
    tabButtonArray[i].addEventListener('click', function () {
      removeActive();
      selectChange(i);
      this.className += ' sliderStart__tab-button_active';
      tabContentArray[i].className += ' sliderStart__tab-content_active';
    })
  }
}


function checkInputs() {
  const inputArray = document.querySelectorAll('input');
  const inputSumbit = document.querySelector('input[type="submit"]');
  let messageError;

  for (let i = 0; i < inputArray.length; i++) {
    switch (inputArray[i].name) {
      case 'shop_start_slider[selector]':
        inputArray[i].addEventListener('change', function () {
          if (this.value === '') {
            this.value = '.slider-start';
          }
        })
        break;
      case 'shop_start_slider[autoPlaySpeed]':
        inputArray[i].addEventListener('change', function () {
          if (this.value === '') {
            this.value = 7;
          }
        })
        break;
      case inputArray[i].name.match(/slide_product_img_file_jpg_/) ? inputArray[i].name : true:
        let arrayInputTypeFileNameJpg = [];
        let arrayInputTypeHiddenNameJpg = [];
        arrayInputTypeFileNameJpg.push(inputArray[i].name);
        arrayInputTypeHiddenNameJpg.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          })
          if (!/(png|jpe?g|gif|svg)/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        })
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);
                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';

                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }

                  })
                })

                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameJpg[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameJpg[0];
                })
              }
            })
          }

        })
        break;
      case inputArray[i].name.match(/slide_product_img_file_webp_/) ? inputArray[i].name : true:
        let arrayInputTypeFileNameWebp = [];
        let arrayInputTypeHiddenNameWebp = [];
        arrayInputTypeFileNameWebp.push(inputArray[i].name);
        arrayInputTypeHiddenNameWebp.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          })
          if (!/webp/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        })
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);
                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';

                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }

                  })
                })

                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameWebp[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameWebp[0];
                })
              }
            })
          }

        })
        break;
      case inputArray[i].name.match(/slide_background_img_file_/) ? inputArray[i].name : true:
        let arrayInputTypeFileNameBgJpg = [];
        let arrayInputTypeHiddenNameBgJpg = [];
        arrayInputTypeFileNameBgJpg.push(inputArray[i].name);
        arrayInputTypeHiddenNameBgJpg.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          })
          if (!/(png|jpe?g|gif|svg)/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        })
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);
                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';

                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }

                  })
                })

                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameBgJpg[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameBgJpg[0];
                })
              }
            })
          }

        })
        break;
      case inputArray[i].name.match(/slide_background_webp_img_file_/) ? inputArray[i].name : true:
        let arrayInputTypeFileNameBgWebp = [];
        let arrayInputTypeHiddenNameBgWebp = [];
        arrayInputTypeFileNameBgWebp.push(inputArray[i].name);
        arrayInputTypeHiddenNameBgWebp.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          })
          if (!/webp/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        })
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);
                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';

                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }

                  })
                })

                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameBgWebp[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameBgWebp[0];
                })
              }
            })
          }

        })
        break;
      case inputArray[i].name.match(/slide_background_video_/) ? inputArray[i].name : true:
        let arrayInputTypeFileNameBgVideo = [];
        let arrayInputTypeHiddenNameBgVideo = [];
        arrayInputTypeFileNameBgVideo.push(inputArray[i].name);
        arrayInputTypeHiddenNameBgVideo.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          })
          if (!/(.ogv|.oga|.ogx|.ogg|.mp4|.webm|.mkv)/gi.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        })
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);
                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';

                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }

                  })
                })

                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameBgVideo[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameBgVideo[0];
                })
              }
            })
          }
        })
        break;
    }
  }
}

checkboxChange();
selectChange();
tabsSwitch();
checkInputs();