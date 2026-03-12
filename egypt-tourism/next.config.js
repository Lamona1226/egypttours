import createNextIntlPlugin from 'next-intl/plugin';

// Point to your i18n.ts request config file
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  // your existing config options stay here
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default withNextIntl(nextConfig);
