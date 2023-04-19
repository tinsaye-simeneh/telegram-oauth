function Profile() {
  const user = localStorage.getItem("user");

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {user ? JSON.parse(user).first_name : "No user"}</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
