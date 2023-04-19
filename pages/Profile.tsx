function Profile() {
  const firstName = localStorage.getItem("firstName");

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {firstName}</p>
      <button
        onClick={() => {
          localStorage.removeItem("firstName");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
