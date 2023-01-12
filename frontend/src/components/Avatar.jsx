import "../styles/Avatar.scss";

export const Avatar = ({ ...rest }) => {
  return (
    <div className="avatar" {...rest}>
      <img
        src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        alt="Avatar"
        className="avatar"
      />
    </div>
  );
};
