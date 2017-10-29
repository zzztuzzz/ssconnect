// @flow
import * as React from 'react'
import type { ArticleComp } from '../../types'
import styled from 'styled-components'
import moment from 'moment'

export type Props = {
  article: ArticleComp,
}

const Wrapper = styled.div`
  width: 100%;
  background: #fafafa;
`

const Cell = styled.div`
  padding: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.6em;
`

const Title = styled.div`
  font-size: 1.2em;
`

const Footer = styled.div`
  display: flex;
`

const TagLabel = styled.div`
  border: 1px dotted gray;
  font-size: 0.8em;
  padding: 0 4px;
  border-radius: 5px;
`

const StoryCell = ({ article }: Props) => {
  const timestamp = moment(article.story.firstPostedAt).fromNow()
  return (
    <Wrapper>
      <Cell
        onClick={() => {
          window.open(article.url)
        }}
      >
        <Header>
          <span>{article.blog.title}</span>
          <span>{timestamp}</span>
        </Header>
        <Title>{article.story.title}</Title>
        <Footer>
          {article.story.tagList.map(tag => (
            <TagLabel key={tag}>{tag}</TagLabel>
          ))}
        </Footer>
      </Cell>
    </Wrapper>
  )
}

export default StoryCell