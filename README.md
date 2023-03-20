# chat-app-backend

![chat-app](https://i.imgur.com/rHa5eNJ.png)

## Tutorial

I learned this Realtime Chat Application through a tutorial from **`JavaScript Mastery`**:

* [[YouTube] Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](https://www.youtube.com/watch?v=ZwFA3YMfkoc)
* [[Github] Source Code](https://github.com/adrianhajdin/project_chat_application)

## Getting Started

1. Create a folder `chat-app-backend`

    ```bash
    mkdir chat-app-backend
    cd chat-app-backend
    ```

2. Initialize `package.json`

    ```bash
    npm init -y
    ```

3. Install npm packages

    ```bash
    npm install --save cors nodemon express socket.io
    ```

4. Add node script in `package.json`

    ```json
    "scripts": {
        "start": "nodemon index.js"
    }
    ```

5. Run it on local (<http://localhost:5000>)

    ```bash
    npm i && npm start
    ```
