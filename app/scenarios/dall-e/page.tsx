'use client';
import {useEffect, useRef, useState} from "react";

import OpenAI from "openai";
import * as Realm from "realm-web";
import Key from "@/app/components/key";
import DallE from "@/app/components/dall-e";
import Prompt from "@/app/components/prompt";
// @ts-ignore
import MongoDB = Realm.Services.MongoDB;


export default function DallePrompt() {
    const [prompt, setPrompt] = useState<string>("");
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


    async function onPrompt(msg: string) {
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
                    <Prompt onResponse={setPrompt}></Prompt>
                    <DallE openai={openai} request={prompt}></DallE>
                    <DallE openai={openai} request={prompt}></DallE>
                    <DallE openai={openai} request={prompt}></DallE>
                    <DallE openai={openai} request={prompt}></DallE>
                </div>

            </div>

        </div>
    );

}
