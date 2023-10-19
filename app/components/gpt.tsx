import {FormEvent, useEffect, useState} from "react";
import baseConfig from '../config/base-config.json';
import TextareaAutosize from 'react-textarea-autosize';


export default function GPT({
                                request = "",
                                onResponse = () => {
                                },
                                systemContext = [],
                                userContext = [],
                                openai,
                                model,
                                name,
                                temperature,
                            }: any) {

    const [prompt, setPrompt] = useState("");
    const [placeholder, setPlaceholder] = useState("Hello!");
    const [aiContext, setAiContext] = useState(systemContext);

    useEffect(() => processRequest(request), [request]);
    useEffect(() => appendToContext(userContext), [userContext]);


    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        processRequest(prompt);
    }

    function processRequest(requestString: string) {
        if (!requestString || requestString.trim() === "") {
            return;
        }

        setPrompt("");
        setPlaceholder("...");
        callChatAPI(requestString)
            .then(res => {
                setPlaceholder(res);
                onResponse(name + ": " + res);
            });
    }

    function appendToContext(requestString: any) {
        const newContext = [...aiContext, ...userContext];
        setAiContext(newContext);
    }


    async function callChatAPI(request: string): Promise<string> {
        try {
            const completionRequest = {"role": "user", "content": request};
            const newContext = [...aiContext, completionRequest];
            setAiContext(newContext);
            console.log(newContext);
            const completionPromise = openai.chat.completions.create({
                ...baseConfig,
                model: model,
                messages: newContext,
                temperature: temperature
            });

            const completion = await Promise.race([
                completionPromise,
                new Promise((resolve, reject) => {
                    setTimeout(resolve, 60000, name + ': *nods silently*');
                })
            ])

            const message = completion.choices[0].message;
            newContext.push(message);
            setAiContext(newContext);
            return message.content;
        } catch (e) {
            console.error(e);
            return "*confused*";
        }
    }


    function onPromptChange(e: any) {
        setPrompt(e.target.value);
    }


    return (
        <div className="command-line">
            <span className="prompt-icon" hidden={!!prompt}>☺</span>
            <span className="prompt-icon" hidden={!prompt}>$</span>
            <TextareaAutosize
                rows={1}
                cols={50}
                autoCapitalize='sentences'
                className="command-input"
                // autoFocus
                placeholder={placeholder}
                value={prompt}
                onChange={onPromptChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        onSubmit(e);
                    }
                }}
            />
        </div>
    );

}
