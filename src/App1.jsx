import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1"
import { Child4 } from "./components/Child4"

export const App1 = memo(() => {
    console.log("Appレンダリング");
    const [num, setNum] = useState(0);

    // 数値+1
    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };

    // 数値をリセット
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);
    
    return (
        // 再レンダリング(Child1～4.jsx)
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset}/>
            <Child4 />
        </>

        // Reactの基本(ColoredMessage.jsx)
        // <>
        //     <h1 style={{ color: "red" }}>こんにちは！</h1>
        //     <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
        //     <ColoredMessage color="pink">元気です。</ColoredMessage>
        //     <button onClick={onClickButton}>ボタン</button>
        //     <p>{num}</p>
        // </>
    );
});