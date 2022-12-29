function App() {
  let getData = async () => {let rs = await fetch("http://localhost:8000");
  console.log("response", rs); };
  getData();
  return <div>welcome to frontend</div>;
}

export default App;
