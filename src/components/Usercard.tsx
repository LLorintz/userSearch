
type userTypes={
    id:number;
    name:string;
    email:string;
    age:25;
    profilePicture:string
}

const Usercard = () => {
  return (
    <div className="user-card">
        <div className="search-section">
            <label htmlFor="UserName">Enter User Name:</label>
            <input type="text" placeholder="Enter user name...."/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Usercard