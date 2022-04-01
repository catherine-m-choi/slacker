# Slacker

[Slacker](https://cat-slacker.herokuapp.com) is a clone of Slack, a messaging app for teams and workspaces. On Slacker, users can create and join channels and group chats. They can pin messages to a chat, save messages for that only they can see, and reply to messages in a thread. Users can also sign up or log in with Google via OAuth2.

## Technologies
* **Frontend:** React, Redux, SCSS
* **Backend:** Ruby on Rails, PostgreSQL
* **Live Chat:** Action Cable WebSockets
* **Google Oauth:** [OmniAuth Google OAuth2](https://github.com/zquestz/omniauth-google-oauth2)
* **Giphy search:** [Giphy API](https://developers.giphy.com/docs/api)
* **Emoji picker:** [React Emoji Picker](https://github.com/ealush/emoji-picker-react) (`emoji-picker-react`)

## Key Features
### Live chat with websockets
* Users can live chat in channels, conversations, and threads. 

https://user-images.githubusercontent.com/59376544/161308573-e7d23c78-efc5-4bbd-8dcb-ecab689c6771.mov

### Channels 
* Users can create new channels. They can also add other users to channels or remove users from a channel.

https://user-images.githubusercontent.com/59376544/161309307-c78af9fa-695b-4ef3-b5dd-aaee2c8c0489.mov

### Conversations
* Users can use the All DMs tab or New Message button to start new direct messages or group chats.* *
* Users can add other users to conversations.

### Messages
* Users can pin messages to a conversation or channel. 
* Users can also save messages for themselves and view them later in the the Save items tab.

### Gifs and emojis
* Users can add emojis to their message text.
* Users can send giphy messages by typing `/giphy [text]` into the message text box.
 
### Google oauth
* Users can log in or sign up with their google account.

### Search
* Users can search through messages, channels, and people.
* They can filter their search by clicking on the appropriate category
* They can also filter their search by starting search queries with `@` to search for users and `#` to search for channels.
