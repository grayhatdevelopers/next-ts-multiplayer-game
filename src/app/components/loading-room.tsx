"use client"

import { useEffect, useState } from "react"

const LoadingRoom = () => {
    const [loadingProgressIndex, setLoadingProgressIndex] = useState(0)
    
    const progressCheckpoints = [
        0,
        32, 
        40,
        60,
        80,
        100
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingProgressIndex((oldIndex) => Math.min(oldIndex + 1, progressCheckpoints.length))
        }, 300)

        return () => {
            clearInterval(intervalId)
        }
    }, [progressCheckpoints.length])

    return (
        <progress id="file" value={progressCheckpoints[loadingProgressIndex]} max="100"> Loading room ({progressCheckpoints[loadingProgressIndex]}%) </progress>
    )
}

export default LoadingRoom