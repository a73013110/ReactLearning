import React, { Suspense, useState } from 'react'

// import NowPlaying from './components/NowPlaying'
// import ComingSoon from './components/ComingSoon'

const NowPlaying = React.lazy(() => import("./components/NowPlaying"))
const ComingSoon = React.lazy(() => import("./components/ComingSoon"))

export default function App() {
    const [type, setType] = useState(1)

    return (
        <div>
            <button onClick={() => {
                setType(1)
            }}>現正熱映</button>
            <button onClick={() => {
                setType(2)
            }}>即將上映</button>

            <Suspense fallback={<div>正在加載中...</div>}>
                {
                    type === 1 ? <NowPlaying></NowPlaying> : <ComingSoon></ComingSoon>
                }
            </Suspense>
        </div>
    )
}