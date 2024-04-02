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

    return <>{time.toLocaleTimeString("ja-JP")}</>;
}

export function OneMinuteTimer() {
    const [timer, setTimer] = React.useState(60);

    // タイマーを1秒ごとに更新
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // タイマーが0になったら60にリセット
    React.useEffect(() => {
        if (timer === 0) {
            setTimer(60);
        }
    }, [timer]);

    return <>{timer}</>;
}
