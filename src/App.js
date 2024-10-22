export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="14"/>
        <Square value="1"/>
        <Square value="1"/>
      </div>
    </>
  );
}
function Square({ value }) {
  function handleClick() {
    console.log("URA");

}

  return <button className="square" onClick={handleClick}>{ value}</button>;
}
