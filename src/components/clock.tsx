import React from "react";

export default function Clock() {
    const [time, setTime] = React.useState(new Date());

    // 現在時刻を1秒ごとに更新
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {time.toLocaleTimeString("ja-JP")}
        </>
    );
}
