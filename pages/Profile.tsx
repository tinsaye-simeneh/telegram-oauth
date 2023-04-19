function Profile({ firstName }) {
  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {firstName}</p>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
