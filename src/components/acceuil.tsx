import "./../css/acceuil.css";
import jennie from "./../assets/img/jennie.png";
//import brouillard from "./../assets/img/brouillard.png";

function Accueil () {

    return (
        <>
            <div className="container">
                    <div className="titre">
                        <div className="sousTitre">
                            <h2>VALORANT</h2>
                            <h2>VICTORY</h2>
                        </div>
                        <h1>BLACK PINK</h1>
                    </div>
                <img src={jennie} alt="jennie" className="jennie" />
            </div>
        </>
    );
}
/*
<img src={brouillard} className="brouillard" />
*/
export default Accueil