const Contacts = ({ users, active, onChange }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div
            style={{ backgroundColor: active === user? "tomato" : null }}
            key={user.id}
            onClick={() => onChange(user)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
