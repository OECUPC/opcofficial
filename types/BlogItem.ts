export type BlogItem = {
    id: string;
    title: string;
    updated_at: Date;
    eyecatch: {
        url: string;
    };
    description: string;
    content: string;
};
