import React from 'react'
import EmbedContainer from 'react-oembed-container';

const EmbedSlice = ({ slice }) => (
  <section>
    <EmbedContainer markup={slice.primary.embed.html}>
    <div  dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
    </EmbedContainer>
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default EmbedSlice