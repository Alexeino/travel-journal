import data from './data';
import Topbar from './components/Topbar';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Topbar />
        <div className="main">
          {
            data.map((item)=>{
              // console.log(item);
              return (
              <Card 
                key={item.id}
                {...item}
              />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
