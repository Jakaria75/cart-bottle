
import { Suspense } from 'react'
import './App.css'
import Compiler from './assets/compiler/Compiler'

const data = fetch('bottle.json')
    .then(res => res.json())

function App() {
    return (
        <>
            <h3>componenet here</h3>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Compiler data={data} />
            </Suspense>
        </>
    )
}

export default App
