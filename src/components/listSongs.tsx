import React, { ChangeEvent, useState } from "react";
import { FaList, FaMicrosoft } from "react-icons/fa";
import "../assets/css/ListSongs.css";

// structure of the data
export interface Song {
  name: string,
  track_number: number,
}

// funcition component
const ListSongs = () => {

  // the data
  const songs = [
    {
      name: "Nuclear",
      track_number: 1
    },
    {
      name: "Outbreak",
      track_number: 2
    },
    {
      name: "Airborne",
      track_number: 3
    },
    {
      name: "Beast In The Belly",
      track_number: 4
    },
    {
      name: "Skull 'n' Bones",
      track_number: 5
    },
    {
      name: "WTF!?",
      track_number: 6
    },
    {
      name: "Survivors",
      track_number: 7
    },
    {
      name: "Patient Zero",
      track_number: 8
    },
    {
      name: "Immunity",
      track_number: 9
    },
    {
      name: "Delirium",
      track_number: 10
    },
  ]

  // listSongs state for show and change list by search
  const [ listSongs, setListSongs ] = useState(songs);
  
  // ordenList state for order like a list or box 
  const [ ordenList, setOrdenList ] = useState("songs-list");
  
  // ordenItem state for order items like a list or box
  const [ ordenItem, setOrdenItem ] = useState("song-item");

  // function for order like a list
  const orderingOnList = () => {
    setOrdenList("songs-list");
    setOrdenItem("song-list-item");
  }
  
  // function for order like a box
  const orderingOnBox = () => {
    setOrdenList("songs-box");
    setOrdenItem("song-box-item");
  }

  // function filter the list by search input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value !== ""){
      let newSongs = listSongs.filter( song => song.name.toLowerCase().includes(e.target.value.toLowerCase()) );
      setListSongs(newSongs)
    }else{
      setListSongs(songs);
    }
  }


  return(
    <>
      <h3>My songs favorites</h3>

      <input type="text" className="song-input" onChange={e => handleChange(e)} placeholder="Search a song here" />

      <br />

      <button className="btn-change" onClick={orderingOnList}> <FaList/> </button>
      <button className="btn-change" onClick={orderingOnBox}> <FaMicrosoft/> </button>

      <div className={`songs ${ordenList}`}>
        {
          listSongs.map((song, index) => 
            <div className={`song-item ${ordenItem}`} key={index}>
              {song.track_number} {song.name}
            </div>
          )
        }
      </div>
    </>
  )
}

export default ListSongs;