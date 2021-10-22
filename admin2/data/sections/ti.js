import SERVER_URI from '.server.env';
import { ti } from '../sectionsId';

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
    'ti_desc',
    'ti_item_1_title',
    'ti_item_1_content',
    'ti_item_2_title',
    'ti_item_2_content',
    'ti_item_3_title',
    'ti_item_3_content',
    'ti_item_4_title',
    'ti_item_4_content',
    'ti_item_5_title',
    'ti_item_5_content',
  ],
  formFieldsType: [
    ['ti_desc', 'textarea', 'textarea'],
    ['ti_item_1_title', 'text', 'input'],
    ['ti_item_1_content', 'textarea', 'textarea'],
    ['ti_item_2_title', 'text', 'input'],
    ['ti_item_2_content', 'textarea', 'textarea'],
    ['ti_item_3_title', 'text', 'input'],
    ['ti_item_3_content', 'textarea', 'textarea'],
    ['ti_item_4_title', 'text', 'input'],
    ['ti_item_4_content', 'textarea', 'textarea'],
    ['ti_item_5_title', 'text', 'input'],
    ['ti_item_5_content', 'textarea', 'textarea'],
  ],
  init_formFieldsValues: {
    ti_desc: '...',
    ti_item_1_title: '...',
    ti_item_1_content: '...',
    ti_item_2_title: '...',
    ti_item_2_content: '...',
    ti_item_3_title: '...',
    ti_item_3_content: '...',
    ti_item_4_title: '...',
    ti_item_4_content: '...',
    ti_item_5_title: '...',
    ti_item_5_content: '...',
  },
  getLink: `${SERVER_URI}/api/getSectionData/${ti}`,
  postLink: `${SERVER_URI}/api/postSectionData`,
};