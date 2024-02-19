import React, { useEffect, useState } from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Card(props) {
  const [comments2, setComments2] = useState([])
  useEffect(() => {
    console.log("card loaded");
  })
  let payL = props.payload

  return (
    <div className={props.normal ? "que-card" : "nothing"}>
      {/* <div className="que-card"> */}
      <div className="que-info">
        <div className="que-pf">
          <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }} />
        </div>
        <div className="que-qn">
          {props.payload ? payL : "NO"}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quo in autem nesciunt nihil odit, fugit labore incidunt voluptas fugiat?
        </div>
      </div>
      <div className="que-ans">
        <div className="que-comments">
          37
          <CommentIcon sx={{ fontSize: "25px", color: "white", paddingLeft: "5px" }} />
        </div>
        <div className="que-reply">
          <button className='rep-btn' onClick={props.expand}>Reply</button>
        </div>
      </div>
    </div>
  )
}


export default function Quora() {
  //const [comments, setComment] = useState(false)
  const data = ["Item 1","Item2"];
  const [expandedCards, setExpandedCards] = useState(Array(data.length).fill(false));

  const handleExpand = (index) => {
    setExpandedCards((prev) => {
      const newExpandedCards = [...prev];
      newExpandedCards[index] = !newExpandedCards[index];
      return newExpandedCards;
    });
  };

  return (
    <div className='web'>

      <div className="menu-bar">

      </div>

      <div className="brainstorm-page">
        <div className='wrapper'>

          {
            data.map((item, index) => (
              <React.Fragment key={index}>
                <Card payload={item} expand={() => handleExpand(index)} normal={true} />
                {expandedCards[index] && <Card key={index} normal={false} onClick={() => handleExpand(index)} />}
              </React.Fragment>
            ))
          }

        </div>

      </div>

    </div>

  )
}
