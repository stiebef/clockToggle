import React, { useState, useEffect, useRef} from 'react';
import Toggle from './/Toggle';
import {Text } from 'react-native';


export default function Clock() {

    const timeRef = useRef();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        start();
        return() => {
            stop;
        }
        }, []);

    function start() {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        timeRef.current = id;
    }

    function stop() {
        clearInterval(timeRef.current);
    }

    return(
        <>
            <Text>
                {time.toLocaleTimeString()}
            </Text>

            <Toggle
                start={start} stop={stop}
            ></Toggle>
        </>
    )
}