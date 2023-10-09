'use client';
import {useEffect, useRef, useState} from "react";

import OpenAI from "openai";
import * as Realm from "realm-web";
import GPT from "@/app/components/gpt";
import Atlas from "@/app/components/atlas";
import Key from "@/app/components/key";
// @ts-ignore
import MongoDB = Realm.Services.MongoDB;


export default function Home() {
    const [gptRequest, setGPTRequest] = useState<string>("");
    const [searchContext, setSearchContext] = useState<any []>([]);

    const [mongoClient, setMongoClient] = useState<MongoDB>();
    const [openai, setOpenai] = useState<OpenAI>();

    const [loading, setLoading] = useState<boolean>(true);
    const [keyUpdated, setKeyUpdated] = useState<boolean>(false);
    const keyRef = useRef<string>();

    useEffect(() => {
        setLoading(false);
        keyRef.current = localStorage.getItem("OPENAI_KEY") || "";
    }, []);

    useEffect(() => {
        const init = async () => {
            const app = new Realm.App({id: process.env.NEXT_PUBLIC_APP_ID || ""});
            const user = await app.logIn(Realm.Credentials.anonymous());
            const client = user.mongoClient(process.env.NEXT_PUBLIC_APP_SERVICE_ID || "");
            setMongoClient(client);

            const openai = new OpenAI({
                apiKey: keyRef.current || "",
                dangerouslyAllowBrowser: true,
            });
            setOpenai(openai);
        }

        if (keyRef) {
            init();
        }
    }, [keyUpdated]);


    async function onSearchResponse(searchResults: any[]) {
        console.log(searchResults);
        const context = searchResults.map(sr => {
            return {
                role: "user",
                content: JSON.stringify(sr)
            }
        });
        setSearchContext(context);
    }

    async function onAiResponse(msg: string) {
        console.log(msg);
    }

    return (

        <div className="grid-container">
            <div className="centered-div" hidden={loading}>
                <div hidden={!!(keyRef.current)}>
                    <Key
                        saveKey={(key: string) => {
                            setKeyUpdated(true);
                            localStorage.setItem("OPENAI_KEY", key);
                            keyRef.current = key;
                        }}>
                    </Key>
                </div>

                <div hidden={!(keyRef.current)}>
                    <GPT
                        name='GPT'
                        model='gpt-3.5-turbo-16k'
                        temperature={0.5}
                        request={gptRequest}
                        searchContext={searchContext}
                        onResponse={onAiResponse}
                        openai={openai}
                    />
                    <Atlas
                        mongoClient={mongoClient}
                        openai={openai}
                        onResponse={onSearchResponse}
                    />
                </div>

            </div>

        </div>
    );

}
