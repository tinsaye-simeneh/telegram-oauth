function Profile(user: { first_name: string }) {
  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {user.first_name}</p>
    </div>
  );
}

export default Profile;
