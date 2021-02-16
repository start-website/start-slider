var app = new Vue({
    delimiters: ['%%', '%%'],
    el: '.start',
    data: {
        group_count: Number(document.querySelector('#group-count').value),
        plugin_url: document.querySelector('#plugin_url').value,
        group_settings: [],
        custom_css: document.querySelector('#custom_css').value,
        custom_css_instruction: false
    },
    methods: {       
        addGroup() {
            this.group_count++;
            this.group_settings.push({
                arrows_nav: false,
                buttons_switch_pos: '',
                buttons_switch_view: '',
                arrows_switch_view: '',
                slider_width: '',
                slider_height: '500',
                slider_min_height: '300',
                font_size: '',
                margin_top: '',
                margin_right: '',
                margin_left: '',
                margin_botton: '',
                border_radius: '',
                buttons_nav: false,
                auto_play: false,
                auto_play_speed: '',
                slide_count: 1,
                slide_content: [],
                slide_active_num: 1
            })
  
            for (let i = 0; i < 1; i++) {
                this.group_settings[this.group_settings.length - 1].slide_content.push({
                    active_slide: 'true',
                    slide_type: 'info-1',
                    product_title: '',
                    product_description: '',
                    product_price: '',
                    product_price_new: '',
                    product_price_new_color: '',
                    product_price_color: '',
                    price_blacken: '',
                    timer: '',
                    timer_color: '',
                    label_text: '',
                    label_text_color: '',
                    label_background: '',
                    star_color: '',
                    star_value: '',
                    video_iframe: '',
                    product_img_file_jpg: '',
                    product_img_file_webp: '',
                    product_link: '',
                    title: '',
                    title_color: '',
                    title_animation: false,
                    text_accent: '',
                    text_accent_color: '',
                    text: '',
                    text_color: '',
                    background_color: '',
                    background_img_file: '',
                    background_webp_img_file: '',
                    background_video_file: '',
                    button_link_1: '',
                    button_text_1: '',
                    button_class_1: '',
                    button_link_2: '',
                    button_text_2: '',
                    button_class_2: '',
                    color_elems_navigation: '',
                    slide_effect: '',
                })
            }
        },
        delGroup() {
            if (this.group_count > 1) {
                this.group_count--;
                this.group_settings.pop();
            }
        },
        addSlide(e, index_group) {
            this.group_settings[index_group].slide_count++;

            this.group_settings[index_group].slide_content.push({
                active_slide: 'true',
                    slide_type: 'info-1',
                    product_title: '',
                    product_description: '',
                    product_price: '',
                    product_price_new: '',
                    product_price_new_color: '',
                    product_price_color: '',
                    price_blacken: '',
                    timer: '',
                    timer_color: '',
                    label_text: '',
                    label_text_color: '',
                    label_background: '',
                    star_color: '',
                    star_value: '',
                    video_iframe: '',
                    product_img_file_jpg: '',
                    product_img_file_webp: '',
                    product_link: '',
                    title: '',
                    title_color: '',
                    title_animation: 'false',
                    text_accent: '',
                    text_accent_color: '',
                    text: '',
                    text_color: '',
                    background_color: '',
                    background_img_file: '',
                    background_webp_img_file: '',
                    background_video_file: '',
                    button_link_1: '',
                    button_text_1: '',
                    button_class_1: '',
                    button_link_2: '',
                    button_text_2: '',
                    button_class_2: '',
                    color_elems_navigation: '',
                    slide_effect: '',
            });
        },
        delSlide(e, index_group) {
            if (this.group_settings[index_group].slide_count > 1) {
                this.group_settings[index_group].slide_count--;
                this.group_settings[index_group].slide_content.pop();
            }
        },
        checkImage(e, type) {
            const input = e.target;
            const inputBlockChilds = input.parentElement.parentElement.children;
            let hintError;
            let regex;
  
            switch (type) {
                case 'jpg':
                    regex = /(png|jpe?g|gif|svg)$/i;
                    break;
                case 'webp':
                    regex = /webp$/i;
                    break;
                case 'video':
                    regex = /(ogv|oga|ogx|ogg|mp4|webm|mkv)$/i;
                    break;
            }
  
            for (let i = 0; i < inputBlockChilds.length; i++) {
                const elem = inputBlockChilds[i];
  
                if (elem.className && elem.className.match(/hint-error/gi)) {
                    hintError = elem;
                }
            }
  
            if (!regex.test(input.value)) {
                hintError.style.display = 'block';
            } else {
                hintError.style.display = '';
            }
        },
        delImageProduct(e, groupNumber, slideNumber, type) {
            const inputFileJpg = document.querySelector(`#block_${groupNumber}_input_img_text_${type}_${slideNumber}`);
            const inputTextJpg = document.querySelector(`#block_${groupNumber}_input_img_file_${type}_${slideNumber}`);
  
            const inputFileJpgNameDefault = inputFileJpg.name;
            const inputTextJpgNameDefault = inputTextJpg.name;
            
            switch (type) {
                case 'jpg':
                    this.group_settings[groupNumber -1].slide_content[slideNumber -1].product_img_file_jpg = false;
                    break;
                case 'webp':
                    this.group_settings[groupNumber -1].slide_content[slideNumber -1].product_img_file_webp = false;
                    break;
            }
            
            inputTextJpg.name = inputFileJpgNameDefault;
            inputFileJpg.name = inputTextJpgNameDefault;
            inputTextJpg.value = '';
        },
        delImageBG(e, groupNumber, slideNumber, type) {
            const inputFileJpg = document.querySelector(`#block_${groupNumber}_input_background_img_file_${type}_${slideNumber}`);
            const inputTextJpg = document.querySelector(`#block_${groupNumber}_input_background_img_text_${type}_${slideNumber}`);
  
            const inputFileJpgNameDefault = inputFileJpg.name;
            const inputTextJpgNameDefault = inputTextJpg.name;
            
            switch (type) {
                case 'jpg':
                    this.group_settings[groupNumber -1].slide_content[slideNumber -1].background_img_file_jpg = false;
                    break;
                case 'webp':
                    this.group_settings[groupNumber -1].slide_content[slideNumber -1].background_img_file_webp = false;
                    break;
            }
            
            inputTextJpg.name = inputFileJpgNameDefault;
            inputFileJpg.name = inputTextJpgNameDefault;
            inputTextJpg.value = '';
        },
        delImageVideo(e, groupNumber, slideNumber, type) {
            const inputFileJpg = document.querySelector(`#block_${groupNumber}_input_video_file_${slideNumber}`);
            const inputTextJpg = document.querySelector(`#block_${groupNumber}_input_video_text_${slideNumber}`);
  
            const inputFileJpgNameDefault = inputFileJpg.name;
            const inputTextJpgNameDefault = inputTextJpg.name;
            
            this.group_settings[groupNumber -1].slide_content[slideNumber -1].background_video_file = false;
            
            inputTextJpg.name = inputFileJpgNameDefault;
            inputFileJpg.name = inputTextJpgNameDefault;
            inputTextJpg.value = '';
        },
        delTimer(e, groupNumber, slideNumber) {
            this.group_settings[groupNumber -1].slide_content[slideNumber -1].timer_date = '';
            this.group_settings[groupNumber -1].slide_content[slideNumber -1].timer_time = '';
        },
        selectTab(e, indexGroup, slideNumber) {
            let tabButton = e.target.parentElement;
            if (e.target.tagName === 'LI') tabButton = e.target;
  
            this.group_settings[indexGroup].slide_active_num = slideNumber;
        },
        pageReload() {
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        },
    },
    created: function () {
        let numberGroup = 0;
        for (let i = 0; i < this.group_count; i++) {
            numberGroup++;
            this.group_settings.push({
                arrows_nav: document.querySelector(`#block_settings_${numberGroup}_arrows_nav`).value == 'true' ? true : false,
                buttons_switch_pos: document.querySelector(`#block_settings_${numberGroup}_buttons_switch_pos`).value,
                buttons_switch_view: document.querySelector(`#block_settings_${numberGroup}_buttons_switch_view`).value,
                arrows_switch_view: document.querySelector(`#block_settings_${numberGroup}_arrows_switch_view`).value,
                slider_width: document.querySelector(`#block_settings_${numberGroup}_slider_width`).value,
                slider_height: document.querySelector(`#block_settings_${numberGroup}_slider_height`).value,
                slider_min_height: document.querySelector(`#block_settings_${numberGroup}_slider_min_height`).value,
                font_size: document.querySelector(`#block_settings_${numberGroup}_font_size`).value,
                margin_top: document.querySelector(`#block_settings_${numberGroup}_margin_top`).value,
                margin_right: document.querySelector(`#block_settings_${numberGroup}_margin_right`).value,
                margin_left: document.querySelector(`#block_settings_${numberGroup}_margin_left`).value,
                margin_bottom: document.querySelector(`#block_settings_${numberGroup}_margin_bottom`).value,
                border_radius: document.querySelector(`#block_settings_${numberGroup}_border_radius`).value,
                buttons_nav: document.querySelector(`#block_settings_${numberGroup}_buttons_nav`).value == 'true' ? true : false,
                auto_play: document.querySelector(`#block_settings_${numberGroup}_auto_play`).value == 'true' ? true : false,
                auto_play_speed: document.querySelector(`#block_settings_${numberGroup}_auto_play_speed`).value,
                slide_content: [],
                slide_active_num: 1,
                slide_count: Number(document.querySelector(`#slider_${numberGroup}_slide_count`).value),
            })
  
            let slideNumber = 0;
            for (let j = 0; j < this.group_settings[i].slide_count; j++) {
                slideNumber++;
                this.group_settings[i].slide_content.push(
                    {   
                        active_slide: document.querySelector(`#slide_${numberGroup}_active_slide_${slideNumber}`).value == 'true' ? true : false,
                        slide_type: document.querySelector(`#slide_${numberGroup}_slide_type_${slideNumber}`).value,
                        product_title: document.querySelector(`#slide_${numberGroup}_product_title_${slideNumber}`).value,
                        product_description: document.querySelector(`#slide_${numberGroup}_product_description_${slideNumber}`).value,
                        product_price: document.querySelector(`#slide_${numberGroup}_product_price_${slideNumber}`).value,
                        product_price_new: document.querySelector(`#slide_${numberGroup}_product_price_new_${slideNumber}`).value,
                        product_price_new_color: document.querySelector(`#slide_${numberGroup}_product_price_new_color_${slideNumber}`).value,
                        product_price_color: document.querySelector(`#slide_${numberGroup}_product_price_color_${slideNumber}`).value,
                        price_blacken: document.querySelector(`#slide_${numberGroup}_price_blacken_${slideNumber}`).value,
                        timer_date: document.querySelector(`#slide_${numberGroup}_timer_date_${slideNumber}`).value,
                        timer_time: document.querySelector(`#slide_${numberGroup}_timer_time_${slideNumber}`).value,
                        timer_color: document.querySelector(`#slide_${numberGroup}_timer_color_${slideNumber}`).value,
                        label_text: document.querySelector(`#slide_${numberGroup}_label_text_${slideNumber}`).value,
                        label_text_color: document.querySelector(`#slide_${numberGroup}_label_text_color_${slideNumber}`).value,
                        label_background: document.querySelector(`#slide_${numberGroup}_label_background_${slideNumber}`).value,
                        star_color: document.querySelector(`#slide_${numberGroup}_star_color_${slideNumber}`).value,
                        star_value: document.querySelector(`#slide_${numberGroup}_star_value_${slideNumber}`).value,
                        video_iframe: document.querySelector(`#slide_${numberGroup}_video_iframe_${slideNumber}`).value,
                        product_img_file_jpg: document.querySelector(`#slide_${numberGroup}_product_img_file_jpg_${slideNumber}`).value,
                        product_img_file_webp: document.querySelector(`#slide_${numberGroup}_product_img_file_webp_${slideNumber}`).value,
                        product_link: document.querySelector(`#slide_${numberGroup}_product_link_${slideNumber}`).value,
                        title: document.querySelector(`#slide_${numberGroup}_title_${slideNumber}`).value,
                        title_color: document.querySelector(`#slide_${numberGroup}_title_color_${slideNumber}`).value,
                        title_animation: document.querySelector(`#slide_${numberGroup}_title_animation_${slideNumber}`).value == 'true' ? true : false,
                        text_accent: document.querySelector(`#slide_${numberGroup}_text_accent_${slideNumber}`).value,
                        text_accent_color: document.querySelector(`#slide_${numberGroup}_text_accent_color_${slideNumber}`).value,
                        text: document.querySelector(`#slide_${numberGroup}_text_${slideNumber}`).value,
                        text_color: document.querySelector(`#slide_${numberGroup}_text_color_${slideNumber}`).value,
                        background_color: document.querySelector(`#slide_${numberGroup}_background_color_${slideNumber}`).value,
                        background_img_file_jpg: document.querySelector(`#slide_${numberGroup}_background_img_file_jpg_${slideNumber}`).value,
                        background_img_file_webp: document.querySelector(`#slide_${numberGroup}_background_img_file_webp_${slideNumber}`).value,
                        background_video_file: document.querySelector(`#slide_${numberGroup}_background_video_file_${slideNumber}`).value,
                        button_link_1: document.querySelector(`#slide_${numberGroup}_button_link_1_${slideNumber}`).value,
                        button_text_1: document.querySelector(`#slide_${numberGroup}_button_text_1_${slideNumber}`).value,
                        button_class_1: document.querySelector(`#slide_${numberGroup}_button_class_1_${slideNumber}`).value,
                        button_link_2: document.querySelector(`#slide_${numberGroup}_button_link_2_${slideNumber}`).value,
                        button_text_2: document.querySelector(`#slide_${numberGroup}_button_text_2_${slideNumber}`).value,
                        button_class_2: document.querySelector(`#slide_${numberGroup}_button_class_2_${slideNumber}`).value,
                        color_elems_navigation: document.querySelector(`#slide_${numberGroup}_color_elems_navigation_${slideNumber}`).value,
                        slide_effect: document.querySelector(`#slide_${numberGroup}_slide_effect_${slideNumber}`).value,
                    }
                )
            }
        }
    }
  })