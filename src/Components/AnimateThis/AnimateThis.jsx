import './AnimateThis.css';
import { useEffect, useState } from 'react';

const AnimateThis = ({ content, outerclass, activeclass }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(false);

        const animationTimer = setTimeout(() => {
            setIsActive(true);
        }, 10);

        return () => clearTimeout(animationTimer);
    }, [content]);

    return (
        <span className={outerclass}>
            <span className={isActive ? activeclass : ''}>
                {content}
            </span>
        </span>
    );
};

export default AnimateThis;