import Component from "./components/Component";

function App() {
  const arr = ['html','css', 'Javascript','React.js', 'Node.js', 'Python'];
  const handeleClick = () => {
    console.log('click');
  }
  return (
    <div className="App">
      <Component list={arr} handeleClick={handeleClick}/>
    </div>
  );
}

export default App;
