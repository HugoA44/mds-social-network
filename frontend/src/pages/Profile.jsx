import { useEffect } from "react";
import { useState } from "react";
import { Avatar } from "../components/Avatar";
import { getProfile } from "../services/Api";
import { Card, Image, Row, Tag, Typography } from "antd";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/queries/usersQueries";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const params = useParams();
  const getUsers = useQuery(GET_USERS, {
    variables: {
      username: params?.username,
    },
  });

  const user = getUsers?.data?.users?.data?.[0]?.attributes;
  const posts = user?.posts?.data;

  const { Title } = Typography;

  if (!user) {
    return (
      <Card>
        <Title style={{ marginBottom: ".5rem" }}>
          Aucun utilisateur pour le pseudo : {params?.username} 😢
        </Title>
      </Card>
    );
  }

  return (
    <div>
      <Card
        className="profile"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Avatar style={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <Title style={{ marginBottom: ".5rem" }}>
            {user?.username?.charAt(0).toUpperCase() + user?.username?.slice(1)}
          </Title>
          <Tag color="blue-inverse">@ {user?.email}</Tag>
        </div>
      </Card>
      <Row justify="space-between" style={{ marginTop: "2rem" }}>
        {posts.length === 0 ? (
          <Card>
            <h2>
              Ce beau gosse de{" "}
              {user?.username?.charAt(0).toUpperCase() +
                user?.username?.slice(1)}{" "}
              n'a rien posté !
            </h2>
          </Card>
        ) : (
          posts?.map((post) => (
            <Card key={post.id} style={{ width: "48%" }}>
              <h2>{post.attributes.title}</h2>
              <Tag color="blue-inverse">
                {post.attributes.user.data.attributes.username}
              </Tag>
              <p>{post.attributes.Content}</p>
              <p>{post.attributes.likers.data.length} likes</p>

              {post.attributes.medias.data.map((media) => (
                <Image
                  key={media.id}
                  src={
                    process.env.REACT_APP_MEDIAS_ENDPOINT + media.attributes.url
                  }
                />
              ))}

              <p>{post.attributes.createdAt}</p>
            </Card>
          ))
        )}
      </Row>
    </div>
  );
};
