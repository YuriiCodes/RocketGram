import axios from "axios";


// Axios instance for api calls
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "f796bcd4-c5a2-4f86-88ad-961815cc5b76"
    }
})

const usersAPI = {
    getUsers(pageNumber, usersPerPage) {
        return instance.get(`users?page=${pageNumber}&count=${usersPerPage}`)
            .then(res => res.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
   follow(id) {
      return instance.post(`follow/${id}`).then(res => res.data)
   },

    getProfileInfo(profileId) {
        console.warn("Obsolete method. Please use profileAPI object");
        return profileAPI.getProfileInfo(profileId);
    }
}
export const profileAPI = {
    getProfileInfo(profileId) {
        return instance.get(`profile/${profileId}`)
    },
    getProfileStatus(profileId) {
        return instance.get(`profile/status/${profileId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
};

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    }

}



export default usersAPI;
