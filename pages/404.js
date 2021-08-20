import React from 'react'
import Image from 'next/image'
import { ErrorContainer, NotFound } from '../styles/styles'

export default function Error404() {
  return (
    <ErrorContainer>
      <NotFound>
        Ups!.. <br /> User not found
      </NotFound>
      <Image
        src="/images/notFound.gif"
        alt="Not found"
        width="480"
        height="270"
        placeholder="blur"
        blurDataURL="/images/logo.png"
      />
    </ErrorContainer>
  )
}
