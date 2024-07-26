import toast from "react-hot-toast";

export interface ApiResponse<R> {
    isError: boolean;
    message?: string;
    responseCode?: string;
    data?: R;
}

interface ApiRequest<B> {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: B;
    headers?: {};
    cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
    apiName?: string;
}

type errorCode = "400" | "401" | "403" | "404" | "500" | "502" | "503";
const getErrorCodes = (apiName: string, statusCode: errorCode) => {
    const errorMessage = {
        "400": "Bad Request",
        "401": "Unauthorized",
        "403": "Forbidden",
        "404": "Not Found",
        "500": "Internal Server Error",
        "502": "Bad Gateway",
        "503": "Service Unavailable",
    };
    return `${apiName} ${errorMessage[statusCode]}`;
};

const customFetch = async <B, R>({ url, method = "GET", body, headers, cache = "default", apiName = "" }: ApiRequest<B>): Promise<ApiResponse<R>> => {
    const options: RequestInit = {
        method,
        cache,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(url, options);

    const resonsData = {
        responseCode: res.status.toString(),
        isError: false,
        data: res.ok ? await res.json() : null,
        message: [200, 201].includes(res.status) ? "Success" : getErrorCodes(apiName, res.status.toString() as errorCode),
    };
    if (!res.ok) {
        if (typeof window !== "undefined") {
            toast.error(res.status.toString() + " : " + getErrorCodes(apiName, res.status.toString() as errorCode));
        }
        resonsData.isError = true;
        return resonsData;
    }
    return resonsData;
};

export default customFetch;
