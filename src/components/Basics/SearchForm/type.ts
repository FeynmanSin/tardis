export interface SearchFormConfig {
    label: string;
    type: string;
    id: string;
    options?: {
        id?: string | number;
        name?: string | number;
    }[];
    defaultValue?: any;
    styles?: object;
} 