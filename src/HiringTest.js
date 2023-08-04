import './App.css';
import React, { useEffect, useState } from 'react';

// Custom Component Imports (For Part 2) :
import Timer from './stopwatch/StopWatchTimer';

// Hi everyone, thank you for the interest in joining Supafaya.

// To give you a brief background about Supafaya:
// Supafaya is an exchange for alternative assets. We allow users to buy, sell, and invest in physical things like sneakers, collectibles, watches, apparel, and more.
// Supafaya comes from the words 'Super' and 'Fire'.
// Right now, we're building the company in stealth but are eager to launch very soon. We've raised a significant amount from investors and are now looking to hire jr devs to beef up the team.
// We're incorporated in Singapore but are in the process of incorporating in the Philippines.

// About the position:
// The role/s we're hiring for is for Junior Web Developers. Our budget for the role is 19-25k/month + benefits + stock options. There will be no over time at any point during your employment in Supafaya. If ever there will be, it would be optional and paid.
// Supafaya aims to be a $1Billion company in a few years and we would not be able to reach that if we don't do things differently. That said, we're implementing a strict Work From Home set up. 
// We're also doing something different in terms of work. Our work schedule is from 8AM - 5PM, 12-1PM lunch break. You'd be required to work on the features we have in the company for the first 6 hours, but from 3PM - 5PM you may work on any form of innovative feature you want (as long as it's related to the company). We want you to enjoy what you're doing and be curious. Work shouldn't be as draining as it is right now. It should be challenging and exciting.
// As it is now, we're financially stable and have the capacity to run for two years without additional funding. However, we're looking to do a bigger raise in a few months. That said, we'd probably have a bigger teamm by then. We don't plan to hire Sr. Devs. Instead, we'll train you to become Sr. Devs. and have Jr. Devs. under you.

// A message from me
// Hi, I'm Owen! I'm the CEO and founder of Supafaya. I'm 24 years old. I'm a fullstack Software Engineer with background in Venture Capital, Finance, Data Science, and Law.
// I would first like to thank you for the interest. If you're still here reading, then I've caught your interest. Thank you and I appreciate the time.
// Second, I'd like to apologize since I won't be able to guide you for your whole stay here in Supafaya. I'd be here most of the time since I usually work 20hrs a day, but I can't promise to be there all the time since I would have to tend to other areas of the business.
// That said, this role would really require a lot of self-learning and independent work. Every Tuesday and Thursday, 10am-11:30am, we'd hold our catch up meetings so that we could re-align on the timeline, the progress, and any roadblocks that you're facing. Other than that, I don't plan to breathe down your neck and check up on you all the time (unless its urgent). 
// You would have complete freedom of the way you'd like to work, all I ask is that you attend our required meetings during Tuesdays and Thursdays, and deliver the work.
// You guys would be our first hires. We don't have any Sr Devs nor do we have a CTO, and we don't plan to have any in the future. Our plan is to get a CTO and Sr. Devs. from this pool of applicants. The opportunity for growth here is absolutely unreal and I would love to have you guys in the company.
// That said, good luck! And I'm looking forward to meet all of you.

// About this test
// So this is a test of backend skills, mainly JavaScript and React.
// This is a test not of your current skills but your ability to learn and persevere in an independent environment.
// You may answer this any way you can. As long as it works! The only rule is to use ReactJS and Javascript.
// These challenges are not in any way hard. ALL, and I mean /ALL/, the answers are on the internet. Use these to your advantage.
// No need to decorate and add styles to the CSS, just make it work.
// You may refer to this page as reference: https://supafaya-hiring-test.vercel.app/
// For those who don't know React, this is an in-depth tutorial of the library: https://www.youtube.com/watch?v=bMknfKXIFA8&t=9463s
// I'm confident that once you watch this video, you'd be able to answer the questions below.

// Instructions
// There's FOUR (4) parts to the test

// PART 1. Vanish
// - The goal here is to make the h1 text '1. Make this Vanish' disappear once you click the button.

// PART 2. Create a basic timer
// - The goal here is to create a timer.
// - Upon 'Start' button click, the timer should start counting
// - Upon 'Stop' button click, the timer should pause counting
// - Upon 'Reset' button click, the timer should reset counting

// PART 3. Add to a list
// - The goal here is to add the input to a list below
// - Upon input and click of the 'add' button, the input should be reflected and added below the row

// PART 4. Submit a form
// - The goal here is to replicate submitting a form.
// - Input username, fullname, age then upon 'Submit' button click, the input fields should be reflected below.

function HiringTest () {

  // --------------------------------------- PERFORMED TASK ------------------------------------------------------

  // Solved By: Fulminar, Aladiah Mehriel P.
  // GitHub: https://github.com/seoll27
  // Time Finished: 9:00PM - 4th of August, 2023

  // PART 1: Make the 'h1' tag disappear and reappear at a click of a button.

  // Solution for PART 1:

  const toggleHandler = () => { setToggle(!toggle); }; // Once the button is pressed, this function sets the state of the 'toggle' useState in its opposite state value (vice-versa).

  const [toggle, setToggle] = useState(true); // initial useState set to true for the 'h1' element to display on first render.

  // Alternative Solution for Part 1 (but I just used a simpler method above for toggling the element 'h1')

  // I used a useState hook and created a callback function that returns the value of the toggle state when the button is pressed.
  // The callback function is used on the useState hook to get the value based on the click of the button and its returned value on the state.

  // Alternative Solution with the use of useState Hook with a Callback function inside of it. :

  // const useToggleButton = (initialState) => {
  //   const [toggleState, setToggleState] = useState(initialState);
  //   const toggler = () => { setToggleState(!toggleState) };
  //   return [toggleState, toggler]
  // };

  // const [toggle, setToggle] = useToggleButton(); 
  // Note for Alternative Solution of Part I: Change the onClick function for the button as 'setToggle'

  // Solution for PART 2:

  // Note: I created a new component folder for the stopwatch timer to provide ease in code navigation and provide this 'HiringTest.js' with minimal code.
  // Stopwatch Component Location: ./sf1-hiring-test/src/stopwatch/(component files are here)

  // The goal is to create a separate component for the timer component. Separate button and handler component is unnecessary -
  // since we already have a given button on inside this functional component.

  // useState Hook for the Stopwatch Timer

  const [isActive, setIsActive] = useState(false); 
  const [time, setTime] = useState(0);

  // useEffect Hook for the Stopwatch Timer
  // This useEffect Hook will check if the stopwatch is running and is also responsible for updating the stopwatch.

  useEffect(() => {

    let interval = null;

    if(isActive === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10); 
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isActive]);

  // Stopwatch Start, Stop, annd Reset Handler 

  const startSwHandler = () => { setIsActive(true); };
  const stopSwHandler = () => { setIsActive(false); };
  const resetSwHandler = () => { setTime(0); setIsActive(false); };

  // Solution for PART 3:

  // The goal is to create a useState Array Hook that accepts input on the 'taskInput' handler state hook.

  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Task List Add Handler

  const addTaskHandler = () => { setTaskList(taskList => [...taskList, taskInput]); setTaskInput(""); }; // In order to push the new item into the useState array, we need to copy the current state array from 'taskList' and next to it, we can add the new state input from 'taskInput' useState hook.

  // Task List Input On Change Handler -- to handle on-change event when a user types on the input box.

  const inputHandler = (event) => { setTaskInput(event.target.value); }; // event value is passed in the function based on the event type happening on the input box. (typing)

  // Solution for PART 4:

  // The goal is relatively the same with the third solution but since we are dealing with a form, the main objective is to create an object that can be passed -
  // in the backend and with the help of useState Hooks to store the values of 'username', 'fullname', and 'age' values.

  // Starting with the useState Hooks for the inputs (Input Handlers)

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(0);

  // Form Input On Change Handler -- to handle on-change event when a user types on the input box.

  const usernameInputHandler = (event) => { setUserName(event.target.value); }; 
  const fullnameInputHandler = (event) => { setFullName(event.target.value); };
  const ageInputHandler = (event) => { setAge(event.target.value); };
  
  // Form Data Object that can be used for backend (I also used this for the 'submitFormData' function).

  const userdata = {
    username: userName,
    fullname: fullName,
    age: age
  };

  // But since we're just trying to present the form data after form submission, we'll go for the same array solution with PART 3

  const [formData, setFormData] = useState([]); // We declared a useState Hook Array for compiling the form data.

  const submitFormData = (event) => { 
    event.preventDefault(); // Preventing the default behavior of the form. (to prevent site refresh after form submission).
    setFormData(formData => [...formData, userdata]); // Creating a new array by copying the previous form data and a new array of form data from 'userdata'.
    setUserName("");
    setFullName("");
    setAge(0);
  }; 
  
  // In order to push the new item into the useState array, we need to copy the current state array from 'formData' and next to it, we can add the new state input from 'userdata' useState hook since userdata object is updated with a new form data input upon clicking submit button.

  // Backend communication code goes here onwards (API Requests, etc.) ---- (ALL PARTS SOLVED :D)

  return (
    <div className="App">
      <header className="App-header">

        {/* Challenge 1: Make the paragraph button vanish on click */}
        <div>
          { 
            toggle && (
              <h1>1. Make this vanish</h1>
            )
          }
          <button onClick={toggleHandler}>Click me!</button>
        </div>

        {/* Challenge 2: Make this timer work */}
        <div>
          <h1>2. Create a Basic Timer</h1>
          {/* Custom Timer Component */}
          <Timer time={time}/>
          <div className='button2'>
            <button onClick={startSwHandler} className='button green'>Start</button>
            <button onClick={stopSwHandler} className='button red'>Stop</button>
            <button onClick={resetSwHandler} className='button yellow'>Reset</button>
          </div>
        </div>

        {/* Challenge 3: Todo App */}
        <div>
          <h1>3. Add to a list</h1>
          <input type="text" onChange={inputHandler} value={taskInput}/>
          <button onClick={addTaskHandler}>Add Task</button>
        </div>
        <ul>
          {
            // I used array.map to iterate through the array of the items
            taskList.map((items, index) => {
              return (
                // I removed the bullet list style and set the key of the 'li' elements to the index of the list array.
                <li style={{listStyleType: 'none'}} key={index}>{items}</li>
              )
            })
          }
        </ul>
        {/* Challenge 4: Submit a form */}
        <div>
          <h1>4. Submit a form</h1>
          {/* We'll use the 'POST' request method when we are required to send a request on the backend.*/}
          <form>
            <div>
              <label htmlFor="userName">
                Username:
                <input value={userName} onChange={usernameInputHandler}/>
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="fullName">
                FullName:
                <input value={fullName} onChange={fullnameInputHandler}/>
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="age">
                Age:
                <input value={age} onChange={ageInputHandler}/>
              </label>
            </div>
            <br />
            <button onClick={submitFormData}>Submit</button>
              { 
                formData !== null ? ( // Since we don't want to display a form with no data, we'll have to undergo a ternary check first if the formData is not equal to null before proceeding to displaying the data after form submission.
                  formData.map((formdata, index, row) => { // used the arguments index and row to get the last array length value and display only the last array value of the array of objects in 'formData' useState hook.
                    if(index + 1 === row.length) { // Condition argument to only display the last index of array of object values.
                      return (
                        <ul key={index}>
                          <h4>Request Sent to DB with below request data</h4>
                          <li>UserName: {formdata.username}</li>
                          <li>FullName: {formdata.fullname}</li>
                          <li>Age: {formdata.age}</li>
                        </ul>
                      )
                    } else {
                      return ""; // Return nothing if it's not at the last array index
                    }
                  })
                ) : ("") // Return nothing if 'formData' is null.
              }
          </form>
        </div>
      </header>
    </div>
  );
}

export default HiringTest;
