interface ProfileData {
    name: string;
    job: string;
    aboutMe: {
        id: number;
        key: string;
        value: string;
        icon: IconType;
    }[];
    socialNetwork: {
        id: number;
        icon: IconType;
        link: string;
    }[];
    buttonLabel: string;
}

interface Projects {
    id: number;
    name: string;
    srcLight: string;
    srcDark: string;
    description: string;
    techUsed: {
        id: number;
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