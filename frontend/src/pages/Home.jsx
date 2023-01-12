import { useQuery } from "@apollo/client";
import { Card, Image, Tag, Row } from "antd";
import { GET_POSTS } from "../graphql/queries/postsQueries";

export const Home = () => {
  const getPosts = useQuery(GET_POSTS);

  return (
    <div className="home">
      <h1>Home</h1>
      <Row justify="space-between">
        {getPosts?.data?.posts?.data?.map((post) => (
          <Card key={post.id} style={{ width: "48%" }}>
            <h2>{post.attributes.title}</h2>
            <Tag color="blue-inverse">
              {post.attributes.user.data.attributes.username}
            </Tag>
            <p>{post.attributes.Content}</p>
            <p>{post.attributes.likers.data.length} likes</p>
            <p>
              {post.attributes.medias.data.map((media) => (
                <Image
                  src={
                    process.env.REACT_APP_MEDIAS_ENDPOINT + media.attributes.url
                  }
                />
              ))}
            </p>
            <p>{post.attributes.createdAt}</p>
          </Card>
        ))}
      </Row>
    </div>
  );
};
