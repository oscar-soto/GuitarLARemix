import Post from "./post";

const PostsList = ({posts}) => {
  return (
    <>
      <div className="heading">Blog</div>
      <div className="blog">
        {posts.map((post) => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default PostsList;
