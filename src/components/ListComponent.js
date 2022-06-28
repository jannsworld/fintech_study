import React, {useState} from "react";

const ListComponents = () => {
const [list, setList] = useState([
    { username: "홍길동", age: 33, height: 183 },
    { username: "고길동", age: 43, height: 123 },
    { username: "둘리", age: 23, height: 133 },
  ]);
  return (
  <div>
    {list.map ((data) => {https://www.npmjs.com/
        return (
            <p> {`${data.username} 님의 나이는 ${data.age} 키는 ${data.height}`}</p>
         );
    })}
  </div>
  );
};


  export default ListComponents;