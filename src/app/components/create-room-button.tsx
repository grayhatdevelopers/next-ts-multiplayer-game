"use client"

import { useRouter } from "next/navigation"

const CreateRoomButton = () => {

    const router = useRouter()

    const handleCreateRoom = () => {
        // navigate('/play')
        router.push('/play')
    }

    return (
        <button
          onClick={handleCreateRoom}
          className="flex flex-col justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Create Room{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>
    )
}

export default CreateRoomButton