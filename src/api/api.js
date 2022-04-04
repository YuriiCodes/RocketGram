import axios from "axios";

const usersAPI = {
    getUsers(pageNumber, usersPerPage) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${usersPerPage}`, {withCredentials: true})
            .then(res => res.data)
    },
    unfollow(id) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "f796bcd4-c5a2-4f86-88ad-961815cc5b76"
            }
        }).then(res => res.data)
    },
   follow(id) {
      return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
           withCredentials: true,
           headers: {
               "API-KEY": "f796bcd4-c5a2-4f86-88ad-961815cc5b76"
           }
       }).then(res => res.data)
   }
}


export default usersAPI;
