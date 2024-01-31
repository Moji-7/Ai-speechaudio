import { useQuery } from "@tanstack/react-query";
import { TextContent } from "../DTO/dto";

export const useGetText = (params: string) => {
    let content : TextContent ;
    // Use the useQuery hook to fetch the data from the API
    const { data, error, isLoading, isError, refetch } = useQuery({
        // Specify the query key as the item.title
        queryKey: ['useGetText', params],

        queryFn: async () => {
            try {

                //const queryString = objectToQueryString(params);
                const searchParams = new URLSearchParams(params);
                const url = "http://localhost:3222/incredibles/all?" + searchParams;
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                });
                if (!response.ok) {
                    throw { status: response.status, message: response.statusText };
                }
                const data: any = await response.json();
                content={id:1,title:"current api result" , content: data.map((item:any) => item.title_en).join('. ')} as TextContent
                //return {data,content};
                return data;
            } catch (error) {
                throw error;
            }
        },
        staleTime: 1000 * 60 * 5,
    });
    return { data, error, isLoading, isError,refetch };
}

