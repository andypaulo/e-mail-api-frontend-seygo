export interface Template {
    id?: number;
    template_name: string;
    type: "HTML" | "Text";
    element: string;
    created_by: string;
}

export interface FormTemplateProps {
    template?: Template;
    onCancel: () => void;
    onSubmit: (data: Omit<Template, 'id'>) => Promise<void>;
    isLoading?: boolean;
}