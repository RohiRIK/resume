import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Rohi',
    lastName:  'Rikman',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Cloud Security Architect',
    avatar:    '/assets/main.png',
    location:  'Asia/Jerusalem',        //Valid TZ ID
    languages: ['English', 'Hebrew']  //Valid ISO-639-1
}

const newsletter = {
    display: false,
    title: 'Subscribe to my newsletter',
    description: 'I occasionally write about cloud security and automation.'
}

const social = [
    // Use standard icons from react-icons
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/RohiRIK',
        display: true
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://linkedin.com/in/rohi-rikman-48831b239',
        display: true
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:Rohi5054@gmail.com',
        display: true
    }
]

const home = {
    label: 'Home',
    title: `${person.name}`,
    description: `Eliminating operational inefficiencies through automation & Generative AI. Specialized in modernizing Microsoft security postures (Azure/Entra ID).`,
    headline: <>Eliminating operational <br/> inefficiencies through <br/> automation & AI.</>,
    subline: <>I'm Rohi, a Cloud Security Architect at <InlineCode>Oncloud</InlineCode>, where I engineer autonomous systems to secure global enterprises. After hours, I build open-source security tools.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Brief about ${person.name}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a Cloud Security Architect with a passion for <b>autonomous systems</b>. My work sits at the intersection of Identity Security (IAM) and Generative AI. I don't just secure environments; I build the tools that make securing them effortless.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Oncloud',
                timeframe: '2022 - Present',
                role: 'Cloud Security & Automation Engineer',
                achievements: [
                    <>Architected a high-scale <b>RAG Framework</b> (10TB+ data) using LangChain, reducing support latency by 40% for 500+ DAU.</>,
                    <>Orchestrated a <b>Zero-Downtime Migration</b> of 10k+ global identities to Entra ID with Zero Trust Conditional Access.</>,
                    <>Led <b>Incident Response (IR)</b> for high-severity ransomware and APT threats, executing containment and remediation.</>,
                    <>Engineered <b>Advanced Threat Hunting</b> queries using KQL & Microsoft Sentinel, improving detection rates via memory forensics.</>,
                    <>Automated 20+ <b>SecOps Workflows</b> via n8n & Azure Logic Apps, securing <b>$15k/year</b> in operational savings.</>
                ],
                images: []
            },
            {
                company: 'IDF',
                timeframe: '2014 - 2017',
                role: 'Staff Sergeant, Combat Unit',
                achievements: [
                    <>Developed exceptional <b>resilience and leadership</b> while performing critical tasks under extreme pressure in a high-demand unit.</>
                ]
            }
        ]
    },
    studies: {
        display: false,
        title: 'Studies',
        institutions: [
            {
                name: 'University of Visual Arts',
                description: <>Focused on 3D modeling and digital sculpting.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'AI & Automation',
                description: <>RAG Frameworks, LangChain, n8n, Python, Azure Logic Apps.</>,
            },
            {
                title: 'Microsoft Security',
                description: <>Microsoft Sentinel (KQL), Entra ID, Defender XDR, Intune.</>,
            },
            {
                title: 'DevSecOps',
                description: <>Docker, Linux (Bash), Git, Terraform, CI/CD pipelines.</>,
            }
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and development projects by ${person.name}`,
    projects: [
        {
            title: 'Device Inventory Analytics',
            description: 'Enterprise asset dashboard for Intune/Entra ID built with Next.js and OpenSearch to index 50k+ devices.',
            timeframe: '2024',
            images: [],
            link: '#'
        },
        {
            title: 'o365-cli',
            description: 'CLI for automating M365 tasks via Graph API. Used by internal teams to streamline tenant management.',
            timeframe: '2023',
            images: [],
            link: 'https://github.com/RohiRIK/o365-cli'
        }
    ]
}

const blog = {
    label: 'Blog',
    title: 'Writing',
    description: `Read what ${person.name} has been up to lately`
}

const gallery = {
    label: 'Gallery',
    title: 'Gallery',
    description: `A collection of photos by ${person.name}`,
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical',
        }
    ]
}

export { person, social, newsletter, home, about, work, blog, gallery };