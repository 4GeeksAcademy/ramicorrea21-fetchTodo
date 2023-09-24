import React, { useEffect, useState } from "react";
import "../../styles/index.css"

//create your first component
const Home = () => {
	 const [list, setList] = useState([])
	 const [task, setTask] = useState({})
	 const [auxList, setAuxList] = useState([])
	 useEffect(() => {
	   fetch('https://playground.4geeks.com/apis/fake/todos/user/ramicorrea21')
	   .then(response => response.json())
	   .then(data => setList(data))
	 }, [])
	 
	 const handleChange = (e) =>{
		setTask({label : e.target.value})
	 }
	 const addToList = (e) =>{
			if(e.key === "Enter"){
				setAuxList([...auxList, task])
				setTask({label : ""})
				
			}
	 }


	return (
		<>
		<div className="d-flex justify-content-center">
			<div className="border rounder">
				<ul>
					<li>
						<form onSubmit={e => e.preventDefault()}>
							<input type="text"
							className="form-control"
							placeholder="What needs to be done?"
							onChange={handleChange}
							onKeyDown={addToList}
							 />
						</form>
					</li>
					{list.length != 0? list.map((task, i) => {
							return(
								<li key={i}>{task.label}</li>
							)
					}) : <li>Add a task</li>}
				</ul>
			</div>
		</div>
		</>
	);
};

export default Home;
