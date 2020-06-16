import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { VideoContainer } from '../components/VideoCard'
import { Connection } from '../services/WSConnection'

export type StreamProps = {}

export type StreamParams = {
  streamId: string
}

const tokens = {
  tokenA:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNvY2lhbF9zbGFtX2FkbWluIiwiZXhwIjoxNTkxNzA4NTkxLCJvcmlnSWF0IjoxNTkxNzA4MjkxfQ.Ki9BMu_cKMrXJ9pH7oKvBIM1CkJk7qk9TUGUEvAAwC0',
  tokenB:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmF2byIsImlhdCI6MTUxNjIzOTAyMn0.n-Fsy8Jx6q9IubgaNZUgooNcsUG_58OVgE9MUTLkMVs',
}

export const Stream: React.FC<StreamProps> = (props) => {
  const { streamId } = useParams<StreamParams>()
  const socketRef = useRef<Connection>()
  const mediaRef = useRef<HTMLVideoElement>()

  useEffect(() => {
    socketRef.current = new Connection(streamId, tokens.tokenA)
  }, [])

  const toggleStream = async () => {
    if (mediaRef.current.srcObject) {
      ;(mediaRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((el) => el.stop())
    } else {
      mediaRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      socketRef.current.toggleStream(mediaRef.current.srcObject)
    }
  }

  return (
    <Layout>
      <button onClick={() => toggleStream()}>Toggle Video</button>

      {/* <video controls autoPlay ref={mediaRef} /> */}

      <VideoContainer
        streams={socketRef.current?.streamers}
        userMedia={mediaRef}
      />
    </Layout>
  )
}