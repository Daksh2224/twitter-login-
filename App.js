
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo" />
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="./google.png" alt="logo" />
          Sign In Google
        </button>
        <button>
          <img src="./apple2.png" alt="logo" />
          Sign In Apple
        </button>

        <hr></hr>
        <span>Or</span>
        <form>
          <input type="text" placeholder="Phone, email or username" />
          <button className="next-btn">Next</button>
        </form>

        <button>
          Forget Password
        </button>
        <p>
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
