import { useEffect } from "react";
import { useState } from "react";
import { Avatar } from "../components/Avatar";
import { getProfile } from "../services/Api";
import { Card, Image, Row, Tag, Typography } from "antd";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries/postsQueries";
import { GET_USER, GET_USERS } from "../graphql/queries/usersQueries";
import { useParams } from "react-router-dom";

export const Users = () => {
  const getUser = useQuery(GET_USERS);

  const users = getUser?.data?.users?.data;

  const { Title } = Typography;

  if (!users?.length) {
    return (
      <Card>
        <Title style={{ marginBottom: ".5rem" }}>Aucun utilisateur</Title>
      </Card>
    );
  }

  return (
    <div>
      <Row style={{ marginTop: "2rem" }}>
        {users?.map((user) => (
          <a
            key={user.id}
            href={`/profile/${user?.attributes?.username}`}
            style={{ width: "20%", marginRight: "2rem" }}
          >
            <Card key={user.id}>
              <Avatar style={{ flex: 1 }} />
              <h2>
                {user?.attributes?.username?.charAt(0).toUpperCase() +
                  user?.attributes?.username?.slice(1)}
              </h2>
              <Tag color="blue-inverse">{user.attributes.email}</Tag>
              <p>
                {user.attributes.posts?.data?.length} publication
                {user.attributes.posts?.data?.length > 1 && "s"}
              </p>
            </Card>
          </a>
        ))}
      </Row>
    </div>
  );
};
