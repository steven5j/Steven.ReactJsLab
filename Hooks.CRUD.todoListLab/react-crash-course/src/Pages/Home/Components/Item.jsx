import { Button } from "react-bootstrap";

const Item = ({ id,note, date, time,deleteData ,submittingStatus}) => {

    function deleteItem(){
      submittingStatus.current=true;
        deleteData(function(prev){
            return prev.filter(item=>item.id !==id)//回傳重排的陣列
        })
    }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <Button onClick={deleteItem} variant="danger">刪除</Button>{" "}
    </div>
  );
};

export default Item;
