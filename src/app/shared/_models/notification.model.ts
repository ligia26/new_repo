export interface Notification {
    id?: string;
    date?: string;
    userId?: string;
    subject?: string;
    message?: string;
    actionType?: string;
    objectType?: 'resource' | 'friendRequest' | 'message' | 'reservation';
    objectId?: string;
    objectSlug?: string;
    icon?: {
        fileName?: string;
        filePath?: string;
    };
    read?: boolean;
    emailSent?: boolean;
    notificationTemplateId?: string;
}