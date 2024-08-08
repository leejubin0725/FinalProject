// types.ts
export interface Movie {
    id: number;
    title: string;
    description: string;
    url: string;
    thumbnailUrl: string;
    tags: string[];
    genre: string;
    castList: string[];
    tagList: string[];
}
