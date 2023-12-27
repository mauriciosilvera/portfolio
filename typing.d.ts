interface ProfileData {
    name: string;
    job: string;
    aboutMe: {
        key: string;
        value: string;
        icon: IconType;
    }[];
    socialNetwork: {
        icon: IconType;
        link: string;
    }[];
    buttonLabel: string;
}

interface Projects {
    name: string;
    src: string;
    description: string;
    techUsed: {
        icon: IconType;
    }[];
}

interface Header {
    id: number;
    name: string;
    icon: IconType;
    link: string;
}

interface Technologies {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    skillsTitle: string;
    cvTitle: string;
    downloadButton: string;
    skills: {
        id: number;
        name: string;
        icon: IconType;
    }[];
}

interface Contact {
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
    name: string;
    nameLabel: string;
    message: string;
    messageLabel: string;
    buttonLabel: string;
    sendedMessage: string;
}