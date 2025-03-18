import React, { useState } from "react";

function To_do_list() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTasks, setMainTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTasks([...mainTasks, { title, desc }]);

    setTitle("");
    setDesc("");
  };

  console.log(mainTasks);

  let renderTasks = <h1>No tasks available</h1>;

  const deleteHandler = (i) => {
    let copyTask = [...mainTasks];
    copyTask.splice(i, 1);
    setMainTasks(copyTask);
  };
  if (mainTasks.length > 0) {
    renderTasks = mainTasks.map((task, i) => {
      return (
        <div
          key={i}
          style={{
            marginBottom: "10px",
            display: "flex",
            fontSize: "30px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginLeft: "40%",
            }}
          >
            <h6 style={{ marginLeft: "0px" }}>{task.title}</h6>
            <h6 style={{ marginLeft: "60px" }}>{task.desc}</h6>
            <button
              style={{
                width: "100px",
                height: "37px",
                marginTop: "40px",
                marginLeft: "50px",
                backgroundColor: "red",
                color: "white",
                fontSize: "18px",
                border: "none",
              }}
              onClick={(i) => {
                deleteHandler();
              }}
            >
              delete
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          margin: "0px",
          padding: "6px",
        }}
      >
        My Todo List
      </h1>
      <form
        onSubmit={submitHandler}
        style={{ margin: "0 auto", maxWidth: "400px" }}
      >
        <input
          type="text"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            border: "2px solid black",
            margin: "25px",
            marginLeft: "-22px",
          }}
        />
        <input
          type="text"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            border: "2px solid black",
            margin: "25px",
            marginLeft: "-20px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "black",
            color: "white",
            padding: "8px",
            border: "none",
            fontSize: "16px",
            width: "100%",
            margin: "25px",
            marginLeft: "-20px",
          }}
        >
          Add Task
        </button>
      </form>

      <div
        style={{
          background: "black",
          color: "white",
          textAlign: "center",
          padding: "4px",
          marginTop: "20px",
        }}
      >
        {renderTasks}
      </div>
    </>
  );
}

export default To_do_list;
