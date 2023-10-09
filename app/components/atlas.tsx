import {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import * as Realm from "realm-web";
// @ts-ignore
import MongoDB = Realm.Services.MongoDB;

const textSearchAggr = [
    {
        $search: {
            index: "plot_embedding_text",
            text: {query: "halloween", path: "plot",}
        }
    },
    {$project: {_id: 1, plot_embedding: 0}}, {$limit: 10}
];

const vectorSearchAggr = [
    {
        $search: {
            "index": "plot_embedding_cosine",
            "knnBeta": {"vector": [], "path": "plot_embedding", "k": 10}
        }
    },
    {$project: {_id: 0, plot_embedding: 0}}
];

export default function Atlas({openai, mongoClient, onResponse}: any) {
    const [prompt, setPrompt] = useState("");
    const [placeholder, setPlaceholder] = useState("Vector Search");

    async function textSearch(query: string): Promise<any[]> {
        // @ts-ignore
        textSearchAggr[0].$search.text.query = query;
        return mongoClient.db("sample_mflix")
            .collection("embedded_movies")
            .aggregate(textSearchAggr);
    }

    async function vectorSearch(query: string): Promise<any[]> {

        const queryEmbedding = await openai.embeddings.create({
            input: query,
            model: 'text-embedding-ada-002',
        });

        // @ts-ignore
        vectorSearchAggr[0].$search.knnBeta.vector = queryEmbedding.data[0].embedding;
        return mongoClient.db("sample_mflix")
            .collection("embedded_movies")
            .aggregate(vectorSearchAggr);
    }

    async function onSubmit(event: any) {
        event.preventDefault();
        setPlaceholder("...");
        setPrompt("");

        const searchResult = await vectorSearch(prompt);
        // const searchResult = await textSearch(prompt);

        onResponse(searchResult);
        const titles = searchResult.map(sr => sr.title).join("\n");
        setPlaceholder(titles);
    }

    function onChange(e: any) {
        setPrompt(e.target.value);
    }

    return (
        <div className="command-line">
            <span className="prompt-icon">░</span>
            <TextareaAutosize
                rows={1}
                cols={50}
                autoCapitalize='sentences'
                className="command-input"
                autoFocus
                placeholder={placeholder}
                value={prompt}
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        onSubmit(e);
                    }
                }}
            />
        </div>
    );

}
