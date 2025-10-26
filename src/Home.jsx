import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import NumContext from './NumContext.jsx'

export default function Home() {
    const { input, setInput } = useContext(NumContext)

    const navigate = useNavigate()

    const toPositive = () => {
        navigate('/positive')
    }

    const toNegative = () => {
        navigate('/negative')
    }

    const onSubmit = () => {
        if (Number(input) > 0) return toPositive()
        else if (Number(input) < 0) return toNegative()
    }

    return (
        <>
            <input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={onSubmit}>Submit</button>
        </>
    )
}