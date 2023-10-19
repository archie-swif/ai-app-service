'use client';
import {useEffect, useRef, useState} from "react";

import OpenAI from "openai";
import * as Realm from "realm-web";
import GPT from "@/app/components/gpt";
import Atlas from "@/app/components/atlas";
import Key from "@/app/components/key";
// @ts-ignore
import MongoDB = Realm.Services.MongoDB;
import baseMovieContext from '@/app/config/base-context.json';


export default function Chat() {
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
                        model='gpt-4'
                        temperature={0.5}
                        userContext={[]}
                        openai={openai}
                    />
                </div>

            </div>

        </div>
    );

}
