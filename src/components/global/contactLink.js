import React from 'react'
import { FancyLinkTag } from 'src/Styles/elements/FancyLink';

export default function ContactLink(props) {
  return (
    <FancyLinkTag href="mailto:frank@frankluongo.com">{props.text || 'frank@frankluongo.com'}</FancyLinkTag>
  )
}
