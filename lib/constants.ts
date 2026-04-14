export const NAV_LINKS = {
  desktop: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ],
  mobile: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ]
} as const;

export const CLIENTS = [
  { name: 'Meta', id: "logo-light--meta_cjdys3" },
  { name: 'US FOODS', id: "logo-light--bny-mellon_bnc7mp" },
  { name: 'ADM', id: "logo-light--adm_elarlo" },
  { name: 'Bank of America', id: "logo-light--band-of-america_d7pgrw" },
  { name: 'BNY MELLON', id: "logo-light--bny-mellon_bnc7mp" },
  { name: "Kellogs", id: "logo-logo--kellogs_mnmem9" }
];


export const FOUNDERS: { name: string; role: string; imageUid: string; linkedIn?: string; website?: string; instagram?: string; twitter?: string; email?: string }[] = [
  {
    name: "Frank Baissie",
    role: "CEO - Founder",
    imageUid: "IMG_1656_Background_Removed_qehqw9",
    linkedIn: "https://www.linkedin.com/in/frank-baissie/"
  },
  {
    name: "Ben T. Degbe",
    role: "CTO - Sr. Software & AI Engineer",
    imageUid: "Isra_uogwn8",
    linkedIn: "https://www.linkedin.com/in/ben-t-degbe-902218175/",
    website: "https://on.contra.com/q7GjBp",
  },
];

