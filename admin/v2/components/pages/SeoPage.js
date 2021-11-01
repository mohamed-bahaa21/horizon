import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Page from 'components/layout/Page';
import MenuLayout from 'components/layout/MenuLayout';
import CSections from './CSections';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import CSeo from 'components/forms/CSeo';

import seo from 'data/seo';

export default function SeoPage() {
  const user = useSelector(state => state.user);
  const router = useRouter();
  const { pathname } = router;

  return (
    <Page>
      <CSeo
        sectionHeader="Landing Page"
        page_id={seo.landing.page_id}
        formFields={seo.landing.formFields}
        formFieldsType={seo.landing.formFieldsType}
        init_formFieldsValues={seo.landing.init_formFieldsValues}
        getLink={seo.landing.getLink}
        postLink={seo.landing.postLink}
      />
    </Page>
  );
}
