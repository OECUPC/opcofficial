export interface ProjectItem {
    id: string;
    title: string;
    updated_at: Date;
    eyecatch: {
        url: string;
    };
    description: string;
    content: string;
    path: string;
    youtube?: string;
    github?: string;
    x?: string;
}
