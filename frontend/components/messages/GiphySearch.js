import React, { useState, useEffect} from "react"
import { withRouter } from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";

import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'


function GiphySearch(props) {
  const gf = new GiphyFetch('06IBHnG3CezngfNeqVPVMjggyqL1FLpJ')
  const [gif, setGif] = useState("");
  // count is used to trigger useEffect
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchGif = async () => {
      const { data } = await gf.random({ tag: props.giphySearchQuery, type: 'gifs' })
      setGif(data);
    }
    fetchGif();
  }, [count]);

  const handleSearch = (e) => {
    setCount(count + 1)
  }
  
  const handleSubmit = (e) => {
    // save to database
    // debugger
    let messageType;
    switch (props.match.path) {
      case '/app/conversations/:id':
        messageType = "Conversation";
        break;
      case '/app/drafts':
        messageType = "Conversation";
        break;
      case '/app/channels/:id':
        messageType = "Channel";
        break;
      default:
        break;
    }
    
    const newMessage = {
      body: gif.id,
      user_id: props.currentUser.id,
      parent_message_id: null,
      messageable_type: messageType,
      messageable_id: props.match.params.id,
      giphy: true
    }

    // debugger
    props.messageAction(newMessage);
    props.setShowGiphy(false);
  }

  // debugger
  
  return (
    <div className="GiphySearch__container" >
      <div className="SearchUsers__hidden-background" onClick={() => props.setShowGiphy(false)} ></div>
      <div className="GiphySearch" >
        {gif && 
          <Gif 
            gif={gif} 
            width={280} 
            height={280} 
            hideAttribution={true} 
            noLink={true} 
          />
        }
          
        <div className="GiphySearch-btns" >
          <button onClick={handleSubmit} >Send</button>
          <button onClick={handleSearch}>Shuffle</button>
          <button onClick={() => props.setShowGiphy(false) } >Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(GiphySearch);