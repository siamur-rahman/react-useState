

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <ExternalUser> </ExternalUser>
    </div>
  );
}


function ExternalUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    console.log('inside useEffect')
  }, [])

  return (
    <div>
      <h3>External Users</h3>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}> </User>)
      }

    </div>
  )
}

function User(props) {

  return (
    <div className="product">
      <h2>name:{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}

export default App;







//|||||||||||||||||||||11111111111---33333||||||||||||||||
// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <ExternalUser> </ExternalUser>
//     </div>
//   );
// }


// function ExternalUser() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//     console.log('inside useEffect')
//   }, [])

//   return (
//     <div>
//       <h3>External Users</h3>
//       <p>{users.length}</p>
//       {
//         users.map(user => <li>{user.name} </li>)
//       }

//     </div>
//   )
// }

// export default App;

///|||||||||||||||||||11111---2222|||||||||||||||||
// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <ExternalUser> </ExternalUser>
//     </div>
//   );
// }


// function ExternalUser() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//     console.log('inside useEffect')
//   }, [])

//   return (
//     <div>
//       <h3>External Users</h3>
//       <p>{users.length}</p>
//     </div>
//   )
// }

// export default App;





//||||||||||||||||||1111111111||||||||||||

// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <ExternalUser> </ExternalUser>
//     </div>
//   );
// }


// function ExternalUser() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => console.log(data))
//     console.log('inside useEffect')
//   }, [])

//   return (
//     <div>
//       <h3>External Users</h3>
//     </div>
//   )
// }

// export default App;



//||||||||||||||45-8 start|||||||||||||||||||||||||||||||||

// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <ExternalUser> </ExternalUser>
//     </div>
//   );
// }


// function ExternalUser() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//    
//     console.log('inside useEffect')
//   }, [])

//   return (
//     <div>
//       <h3>External Users</h3>
//     </div>
//   )
// }

// export default App;




















///////|||||||||||||||4-8 finish|||||||||||||||||||||||||||||

// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(0);//ekhane count hocche state//seCount hocche function



//   const handleIncrease = () => setCount(count + 1);
//   const handleDecrease = () => setCount(count - 1);


//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button>


//     </div>
//   )
// }

// export default App;









//|||||||||||||||||||444444444--22222222222|||||||||||||||

// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(0);//ekhane count hocche state//seCount hocche function
//   console.log(count, setCount);


//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>


//     </div>
//   )
// }

// export default App;










//||||||||||||||||||||||||4444-----11111|||||||||||||||
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(0);//ekhane count hocche state//seCount hocche function
//   console.log(count, setCount);


//   const handleIncrease = () => {
//     setCount(count + 1);


//     console.log('increase clicked')
//   }

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={handleIncrease}>Increase</button>


//     </div>
//   )
// }

// export default App;






//|||||||||||||||||||||||4444444|||||||||||||||||||||||||||
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(0);//ekhane count hocche state//seCount hocche function
//   console.log(count, setCount);


//   const handleIncrease = () => {
//     const newCount = count + 1;
//     setCount(newCount);


//     console.log('increase clicked')
//   }

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={handleIncrease}>Increase</button>


//     </div>
//   )
// }

// export default App;











//||||||||||||||333333|||||||||||||||
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(0);//ekhane count hocche state//seCount hocche function
//   console.log(count, setCount);


//   const handleIncrease = () => console.log('increase clicked')

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={handleIncrease}>Increase</button>

//     </div>
//   )
// }

// export default App;













//|||||||||||||||||||||222222||||||||||||||||||||||||||||
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(0);//ekhane count hocche state//seCount hocche function
//   console.log(count, setCount);

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button>Increase</button>

//     </div>
//   )
// }

// export default App;










//|||||||||||||||||||||||||||11111111111|||||||||||||||||||||

// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">

//       <Counter></Counter>
//     </div>
//   );
// }

// function Counter() {
//   //useState amader ekta state O ekta function  (arry hisebe riturn dei)
//   const [count, setCount] = useState(87);//ekhane count hocche state//seCount hocche function
//   console.log(count, setCount);

//   return (
//     <div>
//       <h1>Count:0</h1>
//       <button>Increase</button>

//     </div>
//   )
// }

// export default App;
