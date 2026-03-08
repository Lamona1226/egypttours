'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  defaultLocale?: 'en' | 'ar';
}

export default function LanguageSwitcher({ defaultLocale = 'en' }: LanguageSwitcherProps): JSX.Element {
  const [locale, setLocale] = useState(defaultLocale);
  return (
    <Button variant="outline" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}>
      {locale === 'en' ? 'AR' : 'EN'}
    </Button>
  );
}
