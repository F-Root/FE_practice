const App = () => {
  return (
    <div>
      <p>안녕하세요, 저는</p>
      <Name checked='true' name='Foori' />
      <p>입니다</p>
    </div>
  );
};

//Name Component
const Name = (props) => {
  console.log(props);
  return (
    <div>
      <p>Foori</p>
    </div>
  );
};

export default App;
