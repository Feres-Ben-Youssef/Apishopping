import axios from "axios";
const BASE_URL = "http://localhost:5000/api"; 
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODBhZTRjMzdjNjY5MmM1MjFhMTlmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzQxODc5NiwiZXhwIjoxNzAzNjc3OTk2fQ.69v2mFxTQIAjeQQpQ2Xt08YKacpZY9FgPfK-ChZJEdg"
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});
