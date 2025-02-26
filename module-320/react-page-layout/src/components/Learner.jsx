import "./Learner.css";

function Learner() {

    let loading = false;
    let showInfo = true;

    const learnerData = {
        name: "John Doe",
        age: 25,
        email: "johndoe@example.com",
        enrolledCourses: ["JavaScript Basics", "Web Development", "AI for Beginners"],
        progress: {
          "JavaScript Basics": "80%",
          "Web Development": "60%",
          "AI for Beginners": "40%"
        },
        isActive: true,
        lastLogin: "2025-02-24",
        skills: ["HTML", "CSS", "JavaScript"],
        isAdmin: true,
        lightMode: false
      }

      if (loading) {
        return <h2>Page Loading....</h2>
      }

    return (
        <div 
        className={learnerData.lightMode ? "light-mode" : "dark-mode"}
        // style={{display: showInfo ? "block": "none"}}
        >

            <h1 style={{display: showInfo ? "block": "none"}}>{learnerData.name}</h1>

            {learnerData.isAdmin && <button>Admin Dashboard</button>}


            <h4>{learnerData.age > 18 ? "Adult" : "Kid"}</h4>

            {
                learnerData.lastLogin ? 
                <h4> Last Login: {learnerData.lastLogin}</h4>
                : <p>First Login</p>
            }

            {learnerData.email && <h4>Email: {learnerData.email}</h4>}

        </div>
    )
}

export default Learner