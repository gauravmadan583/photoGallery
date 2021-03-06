import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import PhotoGrid from './components/PhotoGrid';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {

	const [selectedImg, setSelectedImg ] = useState(null);
	return (
		<div className="App">
			<Title />
			<UploadForm />
			<PhotoGrid setSelectedImg={setSelectedImg}/>
			{ selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</div>
	);
}

export default App;