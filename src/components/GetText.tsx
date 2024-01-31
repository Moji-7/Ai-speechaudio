import React, { useEffect, useState } from 'react';
import { useGetText } from './hooks/useGetText';
import { useParseText } from './hooks/useParseText';
import { Sentence, TextContent } from './DTO/dto';
import { useAddSSMLTags } from './hooks/useAddSSMLTags';

function GetText() {

    const [page, setPage] = useState(1);
    const [textContent, setTextContent] = useState<TextContent>({ id: 0, title: "", content: "" });
    const [dataAll, setDataAll] = useState([] as any[]);

    const { data, error, isLoading, isError, refetch } = useGetText(`text,${page}`);

    useEffect(() => {
        setTextContent({ id: 1, title: "current api result", content: data?.map((item: any) => item.title_en).join('. ') } as TextContent)
    }, [dataAll])

    const parsedSentences = useParseText(textContent);


    const ssmlTags = [
        { name: "break", value: "500ms" },
    ];
    const sentencesWithSSML = useAddSSMLTags(parsedSentences, ssmlTags);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
        setDataAll((prev: any[]) => [...prev, ...data])
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }


    return (
        <div>
            {/* {dataAll && dataAll.map((item: any, index: number) => (
                <div key={index}>{item.title_en}</div>
            ))} */}
            {/* {textContent?.content} */}
            {parsedSentences && parsedSentences.map((item: Sentence, index: number) => (
                <div key={index}>{item.text}</div>
            ))}
            {sentencesWithSSML && sentencesWithSSML.map((item: string, index: number) => (
                <div key={index}>{item}</div>
            ))}
            <button onClick={handleLoadMore}>Load more</button>
            <button onClick={() => { refetch(); setDataAll((prev: any[]) => data) }}>Refresh Again</button>

        </div>
    );
}



export default GetText;
