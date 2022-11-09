import IdCard from './components/IdCard';
//import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <section>
        <h4>Iteração 1 - IdCard</h4>
        <div className="IdCard">
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height="178"
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            className="IdCard"
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height="172"
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </section>
      {/* <section>
        <h4>Iteração 2 - Greetings</h4>
        <div className="GreetingMessage">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
      </section> */}
    </div>
  );
}

export default App;
