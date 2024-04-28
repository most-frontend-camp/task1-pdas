import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard tatle="Alexa"
                                         handle="@alexa2022"
                                         image={AlexaImage}
                                         description="Alexa was created by Amazon"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Cortana "
                                         handle="@cortana2023"
                                         image={CortanaImage}
                                         description="Alexa was created by Microsoft"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Siri "
                                         handle="@siri2024"
                                         image={SiriImage}
                                         description="Alexa was created by Apple"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;