import {getTranslations} from 'next-intl/server';
import ServicesClient from './ServicesClient';

export async function generateMetadata({
  params: {locale},
}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'services'});

  return {
    title: `${t('page_title')} — Egypt Tour and Adventure`,
    description: t('page_subtitle'),
    openGraph: {
      title: `${t('page_title')} — Egypt Tour and Adventure`,
      description: t('page_subtitle'),
    },
  };
}

export default function ServicesPage() {
  return <ServicesClient />;
}

