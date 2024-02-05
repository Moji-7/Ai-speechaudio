import React, { useEffect, useRef } from 'react';

const Circle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            ctx?.beginPath();
            ctx?.arc(100, 100, 50, 0, 2 * Math.PI);
            ctx?.stroke();
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width="200"
            height="200"
            style={{ border: '2px solid black' }}
        />
    );
};

export default Circle;
