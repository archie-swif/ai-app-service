import {useEffect, useState} from "react";


export default function DallE({request, openai, char = "░"}: any) {

    const [image, setImage] = useState("")
    useEffect(() => processRequest(request), [request]);

    function processRequest(requestString: string) {
        if (!requestString || requestString.trim() === "") {
            return;
        }
        callChatAPI(requestString).then(res => {
            setImage(res.data[0].url);
        });
    }


    async function callChatAPI(request: string): Promise<any> {
        try {
            const image = await openai.images.generate({prompt: request, size: "1024x1024"});
            console.log(image);
            return image;
        } catch (e) {
            console.error(e);
            return "{}";
        }
    }


    return (
        <div className="command-line">
            <span className="prompt-icon">{char}</span>
            <img alt={request} className="prompt-image" src={image}/>
        </div>
    );

}
