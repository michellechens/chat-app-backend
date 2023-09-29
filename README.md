# chat-app-backend

![chat-app](https://i.imgur.com/z6C45ar.png)

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
