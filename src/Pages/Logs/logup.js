import './index.scss'
import { useNavigate } from "react-router-dom";
export default function App() {
    const navigate = useNavigate();
    return (
        <main className='Sign-Main'>
        <div className='Sign-ButtonTo-Signup'>
            <button className="cta" onClick={() => navigate('/login')}>
                <span className="hover-underline-animation">Login</span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
        </div>
        <section>
            <h1 className='Sign-Title'>Bem-vindo á Imperial!</h1>
            <div className='Sign-Infos'>
                <div className='Sign-Inputs'>
                    <div className="form__group field">
                        <input required="" placeholder="Name" className="form__field" type="input"/>
                        <label className="form__label" for="name">Nome</label>
                    </div>
                    <div className="form__group field">
                        <input required="" placeholder="Name" className="form__field" type="input"/>
                        <label className="form__label" for="name">Sobrenome</label>
                    </div>
                    <div className="form__group field">
                        <input required="" placeholder="Name" className="form__field" type="email"/>
                        <label className="form__label" for="name">Email</label>
                    </div>
                    <div className="form__group field">
                        <input required="" placeholder="Name" className="form__field" type="password"/>
                        <label className="form__label" for="name">Senha</label>
                    </div>
                </div>
                <div className='Sign-Button'>
                    <button>
                        <span>Estou Pronto!</span><i></i>
                    </button>
                </div>
            </div>
        </section>
    </main>
    );
  }
  