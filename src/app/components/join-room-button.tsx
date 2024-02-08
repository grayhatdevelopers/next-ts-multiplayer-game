"use client"

import { useRouter } from "next/navigation"

const JoinRoomButton = () => {
    const router = useRouter()

    const handleJoinRoom = () => {
        const roomCode = prompt('Enter room code')
        if (roomCode) router.push('/play#r=R' + roomCode)
    }

    return (
<button
          onClick={handleJoinRoom}
          className="flex flex-col justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Join Room{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>
    )
}

export default JoinRoomButton