var SERVER_URI = "http://localhost:5000";

if (process.env.NODE_ENV === "development") {
    SERVER_URI = process.env.REACT_APP_DEV_SERVER;
}

if (process.env.NODE_ENV === "production") {
    SERVER_URI = process.env.REACT_APP_PROD_SERVER;
}

export default SERVER_URI;
