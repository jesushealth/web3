import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Web3 and Blockchain Developer",
        company_name: "Ethereum",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "I will make special erc20, bep20 tokens and smart contracts for you on ethereum.",
        ],
    },
    {
        title: "Web3 and Blockchain Developer",
        company_name: "Blockchain",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Solidity, Javascript, Developing and maintaining blockchain applications using Python and other related technologies.",
            "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web3 and Blockchain Developer",
        company_name: "Bsc",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "I will make special erc20, bep20 tokens and smart contracts for you on binance smart chain.",
        ],
    },
    {
        title: "Web3 and Blockchain Developer",
        company_name: "Polygon",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "I will make special erc20, bep20 tokens and smart contracts for you on polygon.",
        ],
    },
];

const testimonials = [{
        testimonial: "I had a wonderful experience working with Isa. He was incredibly helpful throughout the whole process and worked quickly to deliver exactly what I needed. He was always available to answer any questions I had and took the time to explain everything for me in an easy to understand way. I was thrilled with the result and would recommend Isa to anyone looking for a talented and reliable programmer. Thanks again for all your good work!",
        name: "asadnajeeb",
        image: "https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51",
    },
    {
        testimonial: "This professional web developer is exceptional in their craft, possessing a wealth of knowledge and experience. They are adept at developing high-quality websites that are both visually stunning and user-friendly. Their attention to detail, creativity, and dedication to client satisfaction make them a top choice for any web development project.",
        name: "eric_xyz",
        image: "https://avatars.dicebear.com/api/bottts/stefan.svg",
    },
    {
        testimonial: "Fantastic job as always! Timely manner and fast delivery, this guy don’t mind the extra work and is always happy with revisions.👍😀",
        name: "piilosoftware",
        image: "https://api.multiavatar.com/kathrin.svg",
    },
];

const projects = [{
        name: "By community for community",
        description: "DMD Diamond is a community-driven project with no corporations behind us. The current development team consists of the community enthusiasts united by the idea of wealth and true decentralization. Thus, we have developed a fair, rewarding and constantly rotating validation system with max staking amount designed to avoid extra concentration of power. Now we are working on developing a DAO module that will allow us to move to a new, truly decentralized DMD Diamond governance mode.",
        tags: [{
                name: "p2b",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "testnet",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/isaacWman",
    },
    {
        name: "Multifunctionality and rewards for maintenance",
        description: "Decentralized applications High transaction speed of minimum 400 TPS, low fees, full interoperability with Ethereum, and random number capabilities make DMD Diamond an appealing environment for developing dApps. Cooperative staking Stake on top of other validators or run your own node to support the network and earn Epoch (12 hours) rewards. Each validator receives an equal share of rewards for contributing to block creation, and then shares the rewards among themselves and their delegators.",
        tags: [{
                name: "p2b",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "testnet",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/isaacWman",
    },
    {
        name: "Coded Magic",
        description: "Your Diamond Wallet is an advanced software that allows you to transact with others, gives you a complete and whole ownership of your DMD balance, and rewards network supporters via in-built protocols. It’s also fully Open Source, so anyone can view, analyse, and improve the core code to make sure it says safe, secure and evolving.",
        tags: [{
                name: "p2b",
                color: "blue-text-gradient",
            },
            {
                name: "blockchain",
                color: "green-text-gradient",
            },
            {
                name: "testnet",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/IsaacWman",
    },
];

export { services, technologies, experiences, testimonials, projects };