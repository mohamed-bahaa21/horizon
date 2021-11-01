import SERVER_URI from '.server.env';
import { ld3 } from './sectionsId';

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
  sectionID: ld3,
  formFields: [
    'img_1_title',
    'img_1_sub',
    'img_1_link',

    'img_2_title',
    'img_2_sub',
    'img_2_link',

    'img_3_title',
    'img_3_sub',
    'img_3_link',

    'img_4_title',
    'img_4_sub',
    'img_4_link',

    'img_5_title',
    'img_5_sub',
    'img_5_link',
  ],
  formFieldsType: [
    ['img_1_title', 'text', 'input'],
    ['img_1_sub', 'text', 'input'],
    ['img_1_link', 'text', 'input'],

    ['img_2_title', 'text', 'input'],
    ['img_2_sub', 'text', 'input'],
    ['img_2_link', 'text', 'input'],

    ['img_3_title', 'text', 'input'],
    ['img_3_sub', 'text', 'input'],
    ['img_3_link', 'text', 'input'],

    ['img_4_title', 'text', 'input'],
    ['img_4_sub', 'text', 'input'],
    ['img_4_link', 'text', 'input'],
    
    ['img_5_title', 'text', 'input'],
    ['img_5_sub', 'text', 'input'],
    ['img_5_link', 'text', 'input'],
  ],
  init_formFieldsValues: [{
    img_1_title: '...',
    img_1_sub: '...',
    img_1_link: '...',
    img_2_title: '...',
    img_2_sub: '...',
    img_2_link: '...',
    img_3_title: '...',
    img_3_sub: '...',
    img_3_link: '...',
    img_4_title: '...',
    img_4_sub: '...',
    img_4_link: '...',
    img_5_title: '...',
    img_5_sub: '...',
    img_5_link: '...',
  }],
  getLink: `${SERVER_URI}/api/getSectionData/${ld3}`,
  postLink: `${SERVER_URI}/api/postSectionData`,
};
