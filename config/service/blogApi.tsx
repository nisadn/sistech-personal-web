import { axiosBlog } from "../apiClient";

export const blogApi = {
    get: async () => {
        try {
            const res = await axiosBlog.get('/');
            return res.data;
        } catch (error: any) {
            return error.message;
        }
    },
    create: async (data: any) => {
        try {
            const res = await axiosBlog.post('/', data);
            return res.data;
        } catch (error: any) {
            return error.message;
        }
    },
    update: async (data: any) => {
        try {
            const res = await axiosBlog.put('/', data);
            return res.data;
        } catch (error: any) {
            return error.message;
        }
    },
    like: async (data: any) => {
        try {
            const res = await axiosBlog.post('/like', data);
            return res.data;
        } catch (error: any) {
            return error.message;
        }
    }
}