# Chat Application

This is a simple chat application built with Node.js and Socket.io, allowing users to communicate in real-time over a local network.

## Installation

1. Clone this repository to your local machine.

   git clone https://github.com/your_username/chat-application.git

2. Navigate to the `server` folder in your terminal.

   cd server

3. Install the required dependencies by running:

   npm install

4. Start the server by running:

   npm start

5. Repeat the same process for the `client` and `socket` folders, navigating to each one and running `npm install` followed by `npm start`.

## Configuration

After starting the server, open the `client` folder and locate the `config.js` file. In this file, change the URL from `192.168.29.119` to your PC's network IP address.

   // config.js

   const SERVER_URL = 'http://your_pc_ip:3000';

   export { SERVER_URL };

## Usage

1. Open the client application in your browser.
2. Enter your username and join the chat room.
3. Start sending messages and interact with other users in real-time.

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
