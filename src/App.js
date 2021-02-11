import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="App">

{/* ********************************** */
/*            HEADER                  */
/* ********************************** */}

      <header className="header">
        <div class="logo_nsv">
          <img src={logo} width="80px"/>
        </div>
        <div class="Donate">
          <button>Donate</button>
        </div>
      </header>

{/************************************/
/*              FORM                */
/************************************/}

      <section className="mainframe">
        <h1>Welcome to Lantern</h1>
        <p>Have you seen behavioural changes in your child and you want to know if such behaviours could
            trigger any type of violence? <br/><br/>
            Enter the words you think may fit with your child's behaviour:
        </p>

        <form action="">
          <input type="text" id="keywords" name="key_vals" placeholder="angry, boredom, violent"/>
        </form>
      </section>
    </main>
  );
}

export default App;
