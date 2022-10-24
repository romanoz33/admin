import axios from 'axios';

export const publicApi = axios.create({
    baseURL: `https://${process.env.FRONT_URL}`,
    withCredentials: true,
    // headers: {
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Credentials': true,
    // },
});

export const innerApi = axios.create({
    baseURL: `http://${process.env.API_URL_INNER}`,
});

export const routs = {
    MENU: '/api/menu/get',
};

interface IResponse {
    status: string;
    data: [];
    errors: [];
}

export type urlType =
    | 'MENU'
;

const setLang = (lang: string) => ({ headers: { 'X-Lang': lang } });

export const getPrivateData = (locale: string) => async (type: urlType) => {
    try {
        const res = await innerApi.get<IResponse>(routs[type], setLang(locale));
        console.log('data:', res.data.data);
        if (res.data.errors.length) {
            console.log('response', type, 'error:', res.data.errors);
            return null;
        }
        return res.data.data;
    } catch (e) {
        throw new Error(`Компонент ${type}: ${(e as Error).message}`);
    }
};

// export const getPrivateDataItem =
//     (locale: string) => async (type: urlType, id: string | number) => {
//         try {
//             const res = await innerApi.get<IResponse>(`${routs[type]}${id}`, setLang(locale));
//             // console.log('data:', res.data.data);
//             if (res.data.errors.length) {
//                 console.log('response', type, 'error:', res.data.errors);
//                 return null;
//             }
//             return res.data.data;
//         } catch (e) {
//             throw new Error(`Компонент ${type}: ${(e as Error).message}`);
//         }
//     };

// export const getPublicDataItem = (locale: string) => async (type: urlType, id: string | number) => {
//     try {
//         const res = await publicApi.get<IResponse>(`${routs[type]}${id}`, setLang(locale));
//         // console.log('data:', res.data.data);
//         if (res.data.errors.length) {
//             console.log('response', type, 'error:', res.data.errors);
//             return null;
//         }
//         return res.data.data;
//     } catch (e) {
//         throw new Error(`Компонент ${type}: ${(e as Error).message}`);
//     }
// };

// export const sendFormData = (locale: string) => async (url: string, formData) => {
//     try {
//         const res = await publicApi.post<IResponse>(url, formData);
//         console.log(res.data.errors, 'sendForm');
//         return res.data.data;
//     } catch (e) {
//         throw new Error(`${url} - ${(e as Error).message}`);
//     }
// };
