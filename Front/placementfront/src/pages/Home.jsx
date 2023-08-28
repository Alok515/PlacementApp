import AddInterview from "./student/addInterview";
import AddStudent from "./student/addStudent";

const Home = () => {
    return (
        <>
            <div className="text-center font-bold text-blue-600 mt-2">
                <AddStudent />
                <AddInterview />
            </div>
        </>
    )
}

export default Home;