import React, {useState} from 'react';
import {fakeData} from "./fakeData/fakeData";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [list, setList] = useState(fakeData);

return (
    <VideoList list={list} />
);
}

export default App;
