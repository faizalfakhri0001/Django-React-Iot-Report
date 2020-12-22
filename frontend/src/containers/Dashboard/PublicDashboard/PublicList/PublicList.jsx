import React, { useState, useEffect, useRef } from 'react';
import "./PublicList.css";

import Carousel from 'react-bootstrap/Carousel';

import LineCus from "../../../../components/Charts/LineCus/LineCus";

const PublicList = (props) => {
    const [data, setData] = useState([]);
    const [idx, setIdx] = useState([]);
    const ws = useRef(null);

    // const room = props.match.params.room;


    useEffect(() => {
        ws.current = new WebSocket(`ws://127.0.0.1:8000/channel/mantap/`);
        ws.current.onopen = () => console.log('WebSocket Client Connected');
        ws.current.onclose = () => console.log('WebSocket Client Disconnected');

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        const updateData = (dataIn) => {
            setData(D => [...D, dataIn.value]);
            setIdx(I => [...I, dataIn.idx]);
        }

        ws.current.onmessage = e => {
            const message = JSON.parse(e.data);
            console.log("e", message.value);
            updateData(message);
        };
    }, []);

    return (
        <Carousel indicators={false} className="carou">
            <Carousel.Item>
                <div className="public_list">
                    <LineCus dataIn={data} Idx={idx} />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default PublicList;