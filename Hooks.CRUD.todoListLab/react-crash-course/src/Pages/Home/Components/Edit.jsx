import { useState } from "react";
import { Button } from "react-bootstrap";
import { v4 } from "uuid";

const Edit = ({ add,submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  console.log(note, date, time);

  function addItem() {
    submittingStatus.current=true;
    add(function (prevData) {
      return [ { id: v4(), note, date, time },...prevData];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事</p>
      <input type="text" value={note} onChange={noteChange}></input>
      <p>日期</p>
      <input type="date" value={date} onChange={dateChange}></input>
      <p>時間</p>
      <input type="time" value={time} onChange={timeChange}></input>
      <Button
        onClick={addItem}
        variant="dark"
        className="d-block"
        style={{ width: "100%" }}
      >
        新增
      </Button>{" "}
    </div>
  );
};

export default Edit;
