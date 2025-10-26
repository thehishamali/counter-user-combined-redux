import { useState, useEffect, useContext } from 'react'
import NumContext from './NumContext'

export default function Negative() {
    const { input } = useContext(NumContext);
    const [negative, setNegative] = useState([]);

    useEffect(() => {
        if (Number(input) < 0) {
            setNegative(prev => [...prev, Number(input)])
        }
    }, [input])

    return (
        <>
            <h1>Negative Page</h1>
            <ul>
                {negative.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
        </>
    )
}