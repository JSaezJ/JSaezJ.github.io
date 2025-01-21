export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Juan Sáez',
    subtitle: 'CV/Blog',
    description: '',
    image: {
        src: '/JSJ.jpg',
        alt: 'Juan Sáez'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },

        {
            text: 'Blog',
            href: '/blog'
        },

    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },

        

    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/juan-s%C3%A1ez-ja%C3%A9n-4b8456168/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/juansaezj/'
        },
 
    ],
    hero: {
        title: 'Hi there & welcome to my Web!',
        text: "I'm **Juan Sáez**, an engineering student specializing in electronics. I am primarily interested in the world of automation and am currently doing an internship at Siemens, working with industrial computers",
        image: {
            src: '/JSJ.jpg',
            alt: 'My self'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Juan's Newsletter',
        text: 'All posted blog will arrive at your email account.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
