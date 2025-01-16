import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Team',
      links: [
        {
          text: 'Undefined',
          href: getPermalink('#'),
        },
        {
          text: 'Undefined',
          href: getPermalink('#'),
        },
        {
          text: 'Undefined',
          href: getPermalink('#'),
        },
        
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('#'),
        },
        {
          text: 'Services',
          href: getPermalink('#'),
        },
        {
          text: 'Pricing',
          href: getPermalink('#'),
        },
        {
          text: 'About us',
          href: getPermalink('#'),
        },
        {
          text: 'Contact',
          href: getPermalink('#'),
        },
        {
          text: 'Terms',
          href: getPermalink('#'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('#'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('#'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('#'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('#'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('#'),
        },
        {
          text: 'Subscription',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: '#',
        },
        {
          text: 'Article',
          href: "#",
        },
        {
          text: 'Article (with MDX)',
          href: '#',
        },
        {
          text: 'Category Page',
          href: '#',
        },
        {
          text: 'Tag Page',
          href: '#',
        },
      ],
    },
    {
      text: 'About Us',
      href: getPermalink('','')
    }
    
  ],
  actions: [{ text: 'Download', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },

      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },

      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },

    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <img class="w-15 h-10 md:w-15 md:h-10 md:-mt-2 bg-cover mr-3 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right " src="src/assets/images/Logo_Transparent.png" alt="FCS logo" loading="lazy"></img>
     2024 Freight Collection Solutions Law Group, PLLC. All rights reserved.
  `,
};
