import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard tatle="Alexa " handle="@alexa2022" image={AlexaImage}/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Cortana " handle="@cortana2023" image={CortanaImage}/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Siri " handle="@siri2024" image={SiriImage}/>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;