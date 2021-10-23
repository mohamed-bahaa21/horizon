import SERVER_URI from '.server.env';
import {ld1} from '../sectionsId';

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
  sectionID: ld1,
  formFields: [
    'prog_card_1_img',
    'prog_card_1_link',
    'prog_card_1_type',
    'prog_card_1_header',
    'prog_card_2_img',
    'prog_card_2_link',
    'prog_card_2_type',
    'prog_card_2_header',
    'prog_card_3_img',
    'prog_card_3_link',
    'prog_card_3_type',
    'prog_card_3_header',
    'prog_card_4_img',
    'prog_card_4_link',
    'prog_card_4_type',
    'prog_card_4_header',
  ],
  formFieldsType: [
    ['prog_card_1_img', 'text', 'input'],
    ['prog_card_1_link', 'text', 'input'],
    ['prog_card_1_type', 'text', 'input'],
    ['prog_card_1_header', 'text', 'input'],
    ['prog_card_2_img', 'text', 'input'],
    ['prog_card_2_link', 'text', 'input'],
    ['prog_card_2_type', 'text', 'input'],
    ['prog_card_2_header', 'text', 'input'],
    ['prog_card_3_img', 'text', 'input'],
    ['prog_card_3_link', 'text', 'input'],
    ['prog_card_3_type', 'text', 'input'],
    ['prog_card_3_header', 'text', 'input'],
    ['prog_card_4_img', 'text', 'input'],
    ['prog_card_4_link', 'text', 'input'],
    ['prog_card_4_type', 'text', 'input'],
    ['prog_card_4_header', 'text', 'input'],
  ],
  init_formFieldsValues: {
    prog_card_1_img: '...',
    prog_card_1_link: '...',
    prog_card_1_type: '...',
    prog_card_1_header: '...',
    prog_card_2_img: '...',
    prog_card_2_link: '...',
    prog_card_2_type: '...',
    prog_card_2_header: '...',
    prog_card_3_img: '...',
    prog_card_3_link: '...',
    prog_card_3_type: '...',
    prog_card_3_header: '...',
    prog_card_4_img: '...',
    prog_card_4_link: '...',
    prog_card_4_type: '...',
    prog_card_4_header: '...',
  },
  getLink: `${SERVER_URI}/api/getSectionData/${ld1}`,
  postLink: `${SERVER_URI}/api/postSectionData`,
};
