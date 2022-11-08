import Header from "../../Components/Header/Index";
import Card from "../../Assets/WhiteDiv.svg";
import Rio from "../../Assets/RioDeJaneiro.jpg";
import França from "../../Assets/frança.jpg";
import Stars from "../../Assets/stars.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  return (
    <main className="Home-Main">
      <Header />
      <section className="Home-Main-Content">
        <h1>Imperial!</h1>
        <p>
          As melhores ofertas você encontra aqui na Imperial. Diversos produtos
          para você aproveitar! Sabia que sua viagem inteira pode ser planejada
          com pontos? aproveite e troque já.
        </p>
        <div className="Home-Main-Button">
          <button onClick={() => navigate('/login')}>
            <span>Login</span>
            <svg
              width="34"
              height="34"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="37"
                cy="37"
                r="35.5"
                stroke="black"
                stroke-width="3"
              ></circle>
              <path
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <button onClick={() => navigate('/cadastro')}>
            <span>Cadastre-se</span>
            <svg
              width="34"
              height="34"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="37"
                cy="37"
                r="35.5"
                stroke="black"
                stroke-width="3"
              ></circle>
              <path
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="Home-Main-Cards">
        <div className="Home-Main-Card">
          <img className="BackGround-Home-Main-Card" src={Card} />
          <div className="Home-Main-Card-Content">
            <div className="Home-Main-Card-Content-Image">
              <img src={Rio} />
            </div>
            <div className="Home-Main-Card-Content-Texts">
              <h1>Rio De Janeiro</h1>
              <div className="Home-Main-Card-Content-Description">
                <div>
                  <img src={Stars} />
                  <img src={Stars} />
                  <img src={Stars} />
                  <img src={Stars} />
                  <img src={Stars} />
                </div>
                <p>
                  O Rio de Janeiro é uma grande cidade brasileira à beira-mar,
                  famosa pelas praias de Copacabana e Ipanema, pela estátua de
                  38 metros de altura do Cristo Redentor, no topo do Corcovado,
                  e pelo Pão de Açúcar, um pico de granito com teleféricos até
                  seu cume. A cidade também é conhecida pelas grandes favelas.
                </p>
                <h1>R$ 1.600,00</h1>
                <div class="main_div">
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Home-Main-Card">
          <img className="BackGround-Home-Main-Card" src={Card} />
          <div className="Home-Main-Card-Content">
            <div className="Home-Main-Card-Content-Image">
              <img src={França} />
            </div>
            <div className="Home-Main-Card-Content-Texts">
              <h1>França</h1>
              <div className="Home-Main-Card-Content-Description">
                <div>
                  <img src={Stars} />
                  <img src={Stars} />
                  <img src={Stars} />
                  <img src={Stars} />
                  <img src={Stars} />
                </div>
                <p>
                A França, na Europa Ocidental, tem cidades medievais, aldeias alpinas e praias mediterrâneas. Paris, sua capital, é famosa pelas casas de alta costura, museus de arte clássica, como o Louvre, e monumentos como a Torre Eiffel.
                </p>
                <h1>R$ 7.600,00</h1>
                <div class="main_div">
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
