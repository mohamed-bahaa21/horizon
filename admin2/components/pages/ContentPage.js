import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Page from 'components/layout/Page';
import MenuLayout from 'components/layout/MenuLayout';
import CSections from './CSections';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import CSection from 'components/forms/CSection';

import index from 'data/sections/index';

const SECTIONS = '/content';
const HERO_SECTION = '/content/hero_section';
const LD1_SECTION = '/content/ld1_section';

export default function Settings() {
  const user = useSelector(state => state.user);
  const [option, setOption] = useState(SECTIONS);
  const router = useRouter();
  const { pathname } = router;

  const menuOptions = [
    {
      label: <FormattedMessage id="label.sections" defaultMessage="Sections" />,
      value: SECTIONS,
    },
    {
      label: <FormattedMessage id="label.hero_section" defaultMessage="Hero Section" />,
      value: HERO_SECTION,
    },
    {
      label: <FormattedMessage id="label.ld1_section" defaultMessage="Lens Design 1" />,
      value: LD1_SECTION,
    },
  ];

  return (
    <Page>
      <MenuLayout menu={menuOptions} selectedOption={option} onMenuSelect={setOption}>
        {pathname === SECTIONS && <CSections />}
        {pathname === HERO_SECTION && (
          <CSection
            sectionHeader="Hero Section"
            sectionHeaderID="hero_section"
            formFields={index.hero_section.formFields}
            formFieldsType={index.hero_section.formFieldsType}
            init_formFieldsValues={index.hero_section.init_formFieldsValues}
            getLink={index.hero_section.getLink}
            postLink={index.hero_section.postLink}
          />
        )}
        {pathname === LD1_SECTION && (
          <CSection
            sectionHeader="Lens Design 1"
            sectionHeaderID="ld1_section"
            formFields={index.ld1_section.formFields}
            formFieldsType={index.ld1_section.formFieldsType}
            init_formFieldsValues={index.ld1_section.init_formFieldsValues}
            getLink={index.ld1_section.getLink}
            postLink={index.ld1_section.postLink}
          />
        )}
      </MenuLayout>
    </Page>
  );
}
