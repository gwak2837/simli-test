import Inko from 'inko'
import { KeyboardEvent, MouseEvent } from 'react'

export function preventAndStopEnterPropagation(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    e.preventDefault()
    e.stopPropagation()
  }
}

export function stopPropagation(e: MouseEvent<HTMLElement>) {
  e.stopPropagation()
}

export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length === 11) {
    return (
      phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4) + '-' + phoneNumber.substr(7, 4)
    )
  } else if (phoneNumber.length === 10) {
    return (
      phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6, 4)
    )
  } else {
    return phoneNumber
  }
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const textEncoder = new TextEncoder()

export async function digestMessageWithSHA256(message: string) {
  const msgUint8 = textEncoder.encode(message) // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8) // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('') // convert bytes to hex string
  return hashHex
}

export const { ko2en } = new Inko()
