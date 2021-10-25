const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const horizonSchema = new Schema({
    // START Hero Section 1/13
    // START Hero Section 1/13
    "name": {
        type: String,
        required: false
    },
    "hero_section_display": {
        type: Boolean,
        required: false
    },
    "hero_header_1": {
        type: String,
        required: false
    },
    "hero_parag_1": {
        type: String,
        required: false
    },
    "hero_parag_2": {
        type: String,
        required: false
    },
    "hero_link_1_name": {
        type: String,
        required: false
    },
    "hero_link_1_href": {
        type: String,
        required: false
    },
    "design_state": {
        type: Boolean,
        required: false
    },
    "design_img": {
        type: String,
        required: false
    },
    // END HERO SECTION
    // Start Lens Design 1 Section 2/13
    "ld1_section_display": {
        type: Boolean,
        required: false
    },
    "prog_card_1_link": {
        type: String,
        required: false
    },
    "prog_card_1_img": {
        type: String,
        required: false
    },
    "prog_card_1_type": {
        type: String,
        required: false
    },
    "prog_card_1_header": {
        type: String,
        required: false
    },
    
    "prog_card_2_link": {
        type: String,
        required: false
    },
    "prog_card_2_img": {
        type: String,
        required: false
    },
    "prog_card_2_type": {
        type: String,
        required: false
    },
    "prog_card_2_header": {
        type: String,
        required: false
    },
    
    "prog_card_3_link": {
        type: String,
        required: false
    },
    "prog_card_3_img": {
        type: String,
        required: false
    },
    "prog_card_3_type": {
        type: String,
        required: false
    },
    "prog_card_3_header": {
        type: String,
        required: false
    },
    
    "prog_card_4_link": {
        type: String,
        required: false
    },
    "prog_card_4_img": {
        type: String,
        required: false
    },
    "prog_card_4_type": {
        type: String,
        required: false
    },
    "prog_card_4_header": {
        type: String,
        required: false
    },
    
    // END SECTION
    // START LENS INFO 1 3/13
    "li1_section_display": {
        type: Boolean,
        required: false
    },
    "li1_header": {
        type: String,
        required: false
    },
    "li1_desc": {
        type: String,
        required: false
    },
    "li1_img": {
        type: String,
        required: false
    },
    "li1_parag_1": {
        type: String,
        required: false
    },
    "li1_parag_2": {
        type: String,
        required: false
    },
    "li1_parag_3": {
        type: String,
        required: false
    },
    "li1_parag_4": {
        type: String,
        required: false
    },
    // END SECTION
    // START LENS INFO 3 3/14
    "li3_section_display": {
        type: Boolean,
        required: false
    },
    "li3_header": {
        type: String,
        required: false
    },
    "li3_desc": {
        type: String,
        required: false
    },
    "li3_img": {
        type: String,
        required: false
    },
    "li3_parag_1": {
        type: String,
        required: false
    },
    "li3_parag_2": {
        type: String,
        required: false
    },
    "li3_parag_3": {
        type: String,
        required: false
    },
    "li3_parag_4": {
        type: String,
        required: false
    },
    "li3_parag_5": {
        type: String,
        required: false
    },
    "li3_parag_6": {
        type: String,
        required: false
    },
    // END SECTION
    // START LENS DESIGNS 2 4/13
    "ld2_section_display": {
        type: Boolean,
        required: false
    },
    "ld2_header": {
        type: String,
        required: false
    },
    "ld2_desc": {
        type: String,
        required: false
    },
    "ld2_designs": [{
        "_id": {
            type: Schema.ObjectId,
            required: false
        },
        "header": {
            type: String,
            required: false
        },
        "sub_header": {
            type: String,
            required: false
        },
        "img": {
            type: String,
            required: false
        },
        "content_before": {
            type: String,
            required: false
        },
        "content_after": {
            type: String,
            required: false
        },
        "specs": [{
            "_id": {
                type: Schema.ObjectId,
                required: false
            },
            "title": {
                type: String,
                required: false
            },
            "desc": {
                type: String,
                required: false
            },
        }]
    }],
    // END SECTION
    // START LENS Info 2 5/13
    "li2_section_display": {
        type: Boolean,
        required: false
    },
    "li2_header": {
        type: String,
        required: false
    },
    "li2_desc": {
        type: String,
        required: false
    },
    "li2_image": {
        type: String,
        required: false
    },
    "li2_lft_parags": [{
        "parag_header": {
            type: String,
            required: false
        },
        "parag_content": {
            type: String,
            required: false
        }
    }],
    "li2_rght_parags": [{
        "parag_header": {
            type: String,
            required: false
        },
        "parag_content": {
            type: String,
            required: false
        }
    }],
    // END SECTION
    // START Watch Video 5/13
    "wv_section_display": {
        type: Boolean,
        required: false
    },
    "wv_header": {
        type: String,
        required: false
    },
    "wv_desc": {
        type: String,
        required: false
    },
    "wv_link": {
        type: String,
        required: false
    },
    // END SECTION
    // START Sceeen Shots 5/13
    "ss_section_display": {
        type: Boolean,
        required: false
    },
    "ss_header": {
        type: String,
        required: false
    },
    "ss_desc": {
        type: String,
        required: false
    },
    // END SECTION
    // START Sceeen Shots 5/13
    "ld3_section_display": {
        type: Boolean,
        required: false
    },
    "ld3_header": {
        type: String,
        required: false
    },
    "ld3_desc": {
        type: String,
        required: false
    },
    "ld3_imgs": [{
        "img_title": {
            type: String,
            required: false
        },
        "img_sub": {
            type: String,
            required: false
        },
        "img_link": {
            type: String,
            required: false
        },
    }],
    // END SECTION
    // START Production Info 5/13
    "pi_section_display": {
        type: Boolean,
        required: false
    },
    "pi_header": {
        type: String,
        required: false
    },
    "pi_desc": {
        type: String,
        required: false
    },
    "pi_items": [{
        "item_img": {
            type: String,
            required: false
        },
        "item_num": {
            type: Number,
            required: false
        },
        "item_title": {
            type: String,
            required: false
        },
    }],
    // END SECTION
    // START Technical Info 5/13
    "ti_section_display": {
        type: Boolean,
        required: false
    },
    "ti_header": {
        type: String,
        required: false
    },
    "ti_desc": {
        type: String,
        required: false
    },
    "ti_items": [{
        "item_title": {
            type: String,
            required: false
        },
        "item_content": {
            type: String,
            required: false
        },
    }]
})

// module.exports = mongoose.model('Horizon', horizonSchema);