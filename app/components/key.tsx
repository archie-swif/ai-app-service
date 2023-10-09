import {useState} from "react";

export default function Key({saveKey}: any) {
    const [key, setKey] = useState("");

    async function onSubmit(e: any) {
        e.preventDefault();
        saveKey(key);
    }

    function onChange(e: any) {
        setKey(e.target.value);
    }

    return (
        <div className="command-line">
            <span className="prompt-icon">☼</span>
            <form onSubmit={onSubmit}>
                <input
                    size={100}
                    type={"password"}
                    className="command-input"
                    autoFocus
                    placeholder="OpenAI Key -> Local Storage"
                    onChange={onChange}
                />
            </form>
        </div>
    );

}
