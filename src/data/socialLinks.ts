import type { SocialLink } from '../types/portfolio';

export const socialLinksData: SocialLink[] = [
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:alaam2845@gmail.com',
    displayValue: 'alaam2845@gmail.com',
    icon: 'mail',
    actionPrompt: 'Send Direct Message',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adham-alaa-01319b323/',
    displayValue: 'linkedin.com/in/adham-alaa-01319b323',
    icon: 'linkedin',
    actionPrompt: 'Connect on LinkedIn',
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/adham-3la2',
    displayValue: 'github.com/adham-3la2',
    icon: 'github',
    actionPrompt: 'Inspect Repositories',
  },
  {
    id: 'phone',
    platform: 'Phone / WhatsApp',
    url: 'tel:+201001948765',
    displayValue: '+20 100 194 8765',
    icon: 'phone',
    actionPrompt: 'Direct Voice / WhatsApp',
  },
];
