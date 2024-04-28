import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title = "Alexa " handle = "@alexa2022" />
            <ProfileCard title = "Cortana " handle = "@cortana2023" />
            <ProfileCard title = "Siri " handle = "@siri2024" />
        </div>
    );
}

export default App;