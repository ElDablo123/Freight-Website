import { getPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },
    {
       text: 'Team', href: getPermalink('team') 
    },
    {
      text: 'Practice Areas',
      href: getPermalink('practice-areas')
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
      title: 'Team',
      links: [
        { text: 'Partners', href: getPermalink('team/#partners') },
        { text: 'Paralegals', href: getPermalink('team/#paralegals') },

      ],
    },
    {
      title: 'Practice Areas',
      links: [
        { text: 'Freight Collections', href: getPermalink('practice-areas') },
        { text: 'Commercial Litigation', href: getPermalink('practice-areas') },  
        { text: 'Contract Review', href: getPermalink('practice-areas') },
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
