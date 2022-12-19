import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {details} = props

  return (
    <ul>
      {details.map(each => (
        <BlogItem Details={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
