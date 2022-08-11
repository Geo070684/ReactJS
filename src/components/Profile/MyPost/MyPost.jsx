import s from './MyPost.module.css'

import Post from "./Post/Post"

const MyPost = () => {
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div> <textarea></textarea></div>
      <div><button> Add Post</button></div>
      <div className={s.posts}>
       <Post message="How are you" likeCounts="15"/>
       <Post message="Find, and you" likeCounts="20" />
       <Post  message="Not bad" likeCounts="15"/>
       <Post  message="How are you" likeCounts="15"/>
      </div>
    </div>
  )
}
export default MyPost