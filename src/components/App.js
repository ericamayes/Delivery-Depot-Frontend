// import logo from './logo.svg';
import './App.css';

function App() {

    const [foods, setFoods] = useState([ ]);
    
  
    useEffect( () => {
        fetch("")
        .then((res) => res.json())
        .then((data) => setFoods(data.data))
       }, [] )

      

  return (
  

    <div className="app">
      <Header />
  
      <Switch>
          <Route exact path="/">
              <Home foods={foods}/>
          </Route>
          
          <Route path="/About">
              <About foods={foods}/>
          </Route>
         

          <Route path="/Contact">
              <Contact />
          </Route>

          <Route path="/Help">
              <Help/>
          </Route>
        
        </Switch>
      
      
      
    </div>



)};

export default App;
