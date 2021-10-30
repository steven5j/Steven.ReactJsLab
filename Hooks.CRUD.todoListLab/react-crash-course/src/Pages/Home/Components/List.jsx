import Item from "./Item";

//const arr =[1,2,3];

const List = ({ listData, deleteData,submittingStatus }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note = "預設值", date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
