import {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Prompt({name = "Prompt", onResponse = () => {}}: any) {
    const [prompt, setPrompt] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    async function onSubmit(event: any) {
        event.preventDefault();
        onResponse(prompt);
        setPlaceholder(prompt);
        setPrompt("");
    }

    function onChange(e: any) {
        setPrompt(e.target.value);
    }

    return (
        <div className="command-line">
            <span className="prompt-icon">$</span>
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
