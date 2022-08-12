import s from './MyPost.module.css'

import Post from "./Post/Post"

const MyPost = () => {

let postsData =[
  { id: 1, message: "How are you", likeCounts: "15"},
  { id: 2, message: "Find, and you?", likeCounts:"20" },
  { id: 3, message: "Not bad", likeCounts: "15" },
  { id: 4, message: "How are you", likeCounts: "15" },
]

 let postsElement = postsData.map(post=><Post message={post.message} likeCounts={post.likeCounts}/>)

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div> <textarea></textarea></div>
      <div><button> Add Post</button></div>
      <div className={s.posts}>
       {postsElement}
      </div>
    </div>
  )
}
export default MyPost