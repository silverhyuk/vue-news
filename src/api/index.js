import axios from "axios";


// HTTP Request & Response 관련된 기본 설정
const config = {
    baseUrl: "https://api.hnpwa.com/v0/"
};

// API 함수들

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchCommentItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    fetchUserInfo,
    fetchCommentItem,
    fetchList,
};