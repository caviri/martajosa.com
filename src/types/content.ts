export interface Content {
  meta: {
    lang: string;
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    tagline: string;
    intro: string;
    cta_primary: string;
    cta_secondary: string;
  };
  about: {
    headline: string;
    body: string;
  };
  services: {
    headline: string;
    items: Array<{
      title: string;
      description: string;
      details: string[];
    }>;
  };
  portfolio: {
    headline: string;
    portfolioButton: string;
    portfolioLink: string;
    infographicsButton: string;
    infographicsLink: string;
    projects: Array<{
      title: string;
      summary: string;
      role: string;
      outcomes: string[];
      links: Array<{
        label: string;
        url: string;
      }>;
      image: string;
    }>;
  };
  journey: {
    headline: string;
    experience: {
      title: string;
      items: Array<{
        period: string;
        role: string;
        organization: string;
      }>;
    };
    education: {
      title: string;
      items: Array<{
        degree: string;
        institution: string;
      }>;
    };
    publications: {
      title: string;
      items: string[];
    };
  };
  institutions: {
    headline: string;
    description: string;
  };
  contact: {
    headline: string;
    body: string;
    email: string;
    emailLabel: string;
    linkedinLabel: string;
    websiteLabel: string;
  };
}

export type Language = 'en' | 'es' | 'ca';
