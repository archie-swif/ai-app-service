'use client';
import {useEffect, useRef, useState} from "react";

import OpenAI from "openai";
import * as Realm from "realm-web";
import GPT from "@/app/components/gpt";
// @ts-ignore
import MongoDB = Realm.Services.MongoDB;


export default function TicTacToe() {
    const [openai, setOpenai] = useState<OpenAI>();

    const [loading, setLoading] = useState<boolean>(true);
    const [keyUpdated, setKeyUpdated] = useState<boolean>(false);
    const keyRef = useRef<string>();

    const ticTacContext = [
        {
            "role": "system",
            "content": `We will play text tic-tac toe game. This will be the starting board:
            _|_|_
            _|_|_
             | | 
            
            In this example X made a first move:
            _|_|_
            X|_|_
             | | 
            
            In this example board has more X and O moves:
            
            _|X|O
            X|O|_
             | |  
             
            Try to win as fast as possible, acting as a professional tic-tac-toe player.                              
            `
        }
    ];


    useEffect(() => {
        const openai = new OpenAI({
            apiKey: localStorage.getItem("OPENAI_KEY") || "",
            dangerouslyAllowBrowser: true,
        });
        setOpenai(openai);
    }, []);


    return (

        <div className="grid-container">
            <div className="centered-div">
                <GPT
                    name='GPT'
                    model='gpt-4'
                    temperature={0.5}
                    systemContext={ticTacContext}
                    userContext={[]}
                    openai={openai}
                />

            </div>

        </div>
    );

}
