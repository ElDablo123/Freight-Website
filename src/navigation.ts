import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
       text: 'Team', href: getPermalink('team') 
    },
    {
      text: 'Pages',
      links: [
        
      ],
    },
    {
      text: 'Landing',
      links: [
        
      ],
    },
    {
      text: 'Blog',
      links: [
        
      ],
    },
    {
      text: 'About Us',
      href: getPermalink('','')
    }
    
  ],
  
};

export const footerData = {
  links: [
    
    {
      title: 'Platform',
      links: [
        

      ],
    },
    {
      title: 'Support',
      links: [
        

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

    
  ],
  footNote: `
     2024 Freight Collection Solutions Law Group, PLLC. All rights reserved.
  `,
};
