export type ProjectItem = {
    id: string;
    title: string;
    authors: string[];
    description: string;
    details: string;
    eye_catch: string;
    url: string;

    published_at: Date;
    updated_at: Date;

    youtube?: string;
    github?: string;
    x?: string;

    body: string;
};
