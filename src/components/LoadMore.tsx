import { useQuery, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import React from 'react'


async function fetchProjects(page = 0, oldData: any[] = []): Promise<{ data: any[] }> {

    try {
        const url = "http://localhost:3222/incredibles/all/?page=" + page;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
        });
        if (!response.ok) {
            throw { status: response.status, message: response.statusText };
        }
        // Parse the response data as JSON and return it
        const data: any = await response.json();
        return { data: [...oldData, ...data] }; // wrap data in an object
    } catch (error) {
        throw error;
    }
}

function LoadMore() {


    const queryClient = useQueryClient()
    const [page, setPage] = React.useState(0)

    const { status, data, error, isFetching, isPlaceholderData } = useQuery<{ data: any[] }>({
        queryKey: ['projects', page],
        queryFn: (): Promise<{ data: any[] }> => fetchProjects(page, data?.data || []), // pass data.data to fetchProjects
        placeholderData: keepPreviousData,
        //staleTime: 5000,
    })

      // Prefetch the next page!
  React.useEffect(() => {
    console.log(data?.data)
    if (!isPlaceholderData ) {
      queryClient.prefetchQuery({
        queryKey: ['projects', page + 1],
        queryFn: () => fetchProjects(page + 1),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

    return (
        <>
            {status === 'pending' ? (
                <div>Loading...</div>
            ) : status === 'error' ? (
                <div>Error: {error.message}</div>
            ) : (
                // `data` will either resolve to the latest page's data
                // or if fetching a new page, the last successful page's data
                <div>
                    {data.data.map((project: any) => (
                        <p key={project.id}>{project.title_en}</p>
                    ))}
                </div>
            )}
            <div>Current Page: {page + 1}</div>
            <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 0}
            >
                Previous Page
            </button>{' '}
            <button
                onClick={() => {
                    setPage((old) => ( old + 1 ))
                }}
                // disabled={isPlaceholderData || !data?.hasMore}
            >
                Next Page
            </button>
        </>
    )
}

export default LoadMore