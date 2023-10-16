import {useState} from "react";
import crypto from "crypto";

export default function Key({saveKey}: any) {
    const [key, setKey] = useState("");

    async function onSubmit(e: any) {
        e.preventDefault();

        if (key[2] === "-") {
            saveKey(key);
            return;
        }

        try {
            const decrypted = await decrypt(key);
            if (decrypted[2] === "-") {
                saveKey(decrypted);
            }
        } catch (err) {
            console.error("Bad OpenAI Key", err)
        }

    }

    function onChange(e: any) {
        setKey(e.target.value);
    }

    async function decrypt(key: string) {
        let salt = Buffer.from(process.env.NEXT_PUBLIC_DEMO_SALT || "");
        let decipher = crypto.createDecipheriv('aes256', key, salt);
        return decipher.update(process.env.NEXT_PUBLIC_DEMO_KEY || "", 'hex', 'utf8') + decipher.final('utf8');
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
