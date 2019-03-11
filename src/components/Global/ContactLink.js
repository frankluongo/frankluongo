import React from 'react'

export default function ContactLink(props) {
  return (
    <a href="mailto:frank@frankluongo.com">{props.text || 'frank@frankluongo.com'}</a>
  )
}
