export type Lecture = {
    id: string;
    name: string;
    description: string;
    previewImageUrl?: string;
    video?: {
        url: string;
        duration: string;
    };
    lector: {
        name: string;
        description: string;
    };
    conclusion: string;
    presentationUrl?: string;
    links: Array<{
        name: string;
        url: string;
    }>;
    contacts: Array<{
        name: string;
        url: string;
    }>;
};