import './index.css'

const BlogItem = props => {
  const {Details} = props
  const {title, description, publishedDate} = Details

  return (
    <li className="single-list-container">
      <div className="title-publishedDate-container">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>

      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
