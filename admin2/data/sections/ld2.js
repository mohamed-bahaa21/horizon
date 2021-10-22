import SERVER_URI from '.server.env';
import { ld2 } from '../sectionsId';

export default {
  meta_formFields: ['section_index', 'section_name', 'section_display'],
  meta_formFieldsType: [
    ['section_index', 'number', 'input'],
    ['section_name', 'text', 'input'],
    ['section_display', 'checkbox', 'input'],
  ],
  meta_formFieldsValues: {
    section_index: 0,
    section_name: 'section name',
    section_display: true,
  },
  // ======================================================
  formFields: [
    "ld2_design_1_header",
    "ld2_design_1_sub_header",
    "ld2_design_1_img",
    "ld2_design_1_content_before",
    "ld2_design_1_content_after",

    "ld2_design_2_header",
    "ld2_design_2_sub_header",
    "ld2_design_2_img",
    "ld2_design_2_content_before",
    "ld2_design_2_content_after",

    "ld2_design_3_header",
    "ld2_design_3_sub_header",
    "ld2_design_3_img",
    "ld2_design_3_content_before",
    "ld2_design_3_content_after",

    "ld2_design_4_header",
    "ld2_design_4_sub_header",
    "ld2_design_4_img",
    "ld2_design_4_content_before",
    "ld2_design_4_content_after",
  ],
  formFieldsType: [
    ['ld2_design_1_content_after', 'textarea', 'textarea'],
    ['ld2_design_1_content_before', 'textarea', 'textarea'],
    ['ld2_design_1_header', 'text', 'input'],
    ['ld2_design_1_sub_header', 'text', 'input'],
    ['ld2_design_1_img', 'text', 'input'],

    ['ld2_design_2_content_after', 'textarea', 'textarea'],
    ['ld2_design_2_content_before', 'textarea', 'textarea'],
    ['ld2_design_2_header', 'text', 'input'],
    ['ld2_design_2_sub_header', 'text', 'input'],
    ['ld2_design_2_img', 'text', 'input'],

    ['ld2_design_3_content_after', 'textarea', 'textarea'],
    ['ld2_design_3_content_before', 'textarea', 'textarea'],
    ['ld2_design_3_header', 'text', 'input'],
    ['ld2_design_3_sub_header', 'text', 'input'],
    ['ld2_design_3_img', 'text', 'input'],

    ['ld2_design_4_content_after', 'textarea', 'textarea'],
    ['ld2_design_4_content_before', 'textarea', 'textarea'],
    ['ld2_design_4_header', 'text', 'input'],
    ['ld2_design_4_sub_header', 'text', 'input'],
    ['ld2_design_4_img', 'text', 'input'],
  ],
  init_formFieldsValues: {
    ld2_design_1_header: '...',
    ld2_design_1_sub_header: '...',
    ld2_design_1_img: '...',
    ld2_design_1_content_before: '...',
    ld2_design_1_content_after: '...',

    ld2_design_2_header: '...',
    ld2_design_2_sub_header: '...',
    ld2_design_2_img: '...',
    ld2_design_2_content_before: '...',
    ld2_design_2_content_after: '...',

    ld2_design_3_header: '...',
    ld2_design_3_sub_header: '...',
    ld2_design_3_img: '...',
    ld2_design_3_content_before: '...',
    ld2_design_3_content_after: '...',

    ld2_design_4_header: '...',
    ld2_design_4_sub_header: '...',
    ld2_design_4_img: '...',
    ld2_design_4_content_before: '...',
    ld2_design_4_content_after: '...',
  },
  getLink: `${SERVER_URI}/api/getSectionData/${ld2}`,
  postLink: `${SERVER_URI}/api/postSectionData`,
};
