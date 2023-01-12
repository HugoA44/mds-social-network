import { useEffect } from "react";
import { useState } from "react";
import { Avatar } from "../components/Avatar";
import { getProfile } from "../services/Api";
import { Card, Image, Row, Tag, Typography } from "antd";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries/postsQueries";
import { GET_USER, GET_USERS } from "../graphql/queries/usersQueries";
import { useNavigate, useParams } from "react-router-dom";

export const Users = () => {
  const getUser = useQuery(GET_USERS);
  const navigate = useNavigate();

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
          <Card
            key={user.id}
            onClick={() =>
              navigate(`/profile/${user?.attributes?.username.toLowerCase()}`)
            }
            style={{ width: "20%", marginRight: "2rem", cursor: "pointer" }}
          >
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
        ))}
      </Row>
    </div>
  );
};
