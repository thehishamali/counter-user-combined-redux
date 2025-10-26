import { useState, useEffect, useContext } from 'react'
import NumContext from './NumContext'

export default function Positive() {
    const { input } = useContext(NumContext);
    const [positive, setPositive] = useState([]);

    useEffect(() => {
        if (Number(input) > 0) {
            setPositive(prev => [...prev, Number(input)])
        }
    }, [input])

    return (
        <>
            <h1>Positive Page</h1>
            <ul>
                {positive.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
        </>
    )
}