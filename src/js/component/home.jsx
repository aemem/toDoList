import React, { useState } from "react";



const Home = () => {
	const [input, setInput] = useState=("");
	const [list, setList] = useState([]);

	return (
		<div className="container ">
			<div className="mx-auto mb-3 w-25">
				<label htmlFor="exampleInputEmail1">
					<h2>To Do</h2>
				</label>
				<div className="d-flex">
					<input
						type="text"
						className="form-control"
						id="inputTask"
						aria-describedby="emailHelp"
						placeholder="enter task"
						value={input}
						onChange= {(e) => {setInput(e.target.value)}}
					/>
					<button type="button" class="btn btn-primary" onClick={() => setList([...list], input)}>
						Submit
					</button>
				</div>
			</div>
			{list.map((e,i)=>{
				<div key={i} className="task">
					{e}
				</div>
			})}
		</div>
	);
};

export default Home;
