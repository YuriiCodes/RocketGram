import User from "./User/User";
import React, {useEffect} from "react";
import axios from "axios";
import classes from "./Users.module.css";
// function Users(props) {
//     let getUsers = () => {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
//             props.setUsers(res.data.items)
//             console.log(res);
//         })
//     }
//     let setDefaultUsers = () => {
//         props.setUsers([
//             {
//                 id: 1,
//                 // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
//                 photoUrl: "",
//                 followed: true,
//                 name: "Igor V",
//                 status: "I am Igor!",
//                 location: {city: "Kyiv", country: "Ukraine"}
//             },
//             {
//                 id: 2,
//                 // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
//                 photoUrl: "",
//                 followed: false,
//                 name: "Ayn R",
//                 status: "I have shrugged!",
//                 location: {city: "Washinton", country: "USA"}
//             },
//         ])
//     }
//
//     // Same as applying componentDidMount method in class component
//     useEffect( () => {
//         getUsers();
//     })
//     return (
//         <div>
//             <button onClick={getUsers}>Get users</button>
//             {
//                 props.users.map(u => <User id={u.id} photoUrl={u.photoUrl} followed={u.followed}
//                                            fullName={u.name} status={u.status} follow={props.follow}
//                                            unfollow={props.unfollow} city="Kyiv" country="Ukraine"/>)
//             }
//         </div>
//     )
// };

class Users extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    getUsers = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
            let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
            this.props.setLastPaginationElement(amountOfPages - 1);
            console.log(res);
        })
    }
    setDefaultUsers = () => {
        this.props.setUsers([
            {
                id: 1,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: true,
                name: "Igor V",
                status: "I am Igor!",
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 2,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: false,
                name: "Ayn R",
                status: "I have shrugged!",
                location: {city: "Washinton", country: "USA"}
            },
        ])
    }
    updatePaginationList = (pageNumber, amountOfPages) => {
        if (pageNumber > 0 && pageNumber < amountOfPages) {
            if (pageNumber + 1 === amountOfPages) {
                this.props.setCurrentPaginationArray([pageNumber - 1, pageNumber]);
                this.getUsers(pageNumber);
                return;
            }
            this.props.setCurrentPaginationArray([pageNumber - 1, pageNumber, pageNumber + 1]);
            this.getUsers(pageNumber);
        }
    }
    onPageChange = (pageNumber, amountOfPages) => {
        this.props.changePage(pageNumber);
        this.updatePaginationList(pageNumber, amountOfPages);
        this.props.setLastPaginationElement(amountOfPages - 1);
    }


    render() {
        let pages = []
        let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
        // for(let i = 1; i <= amountOfPages; i++) {
        //     pages.push(i)
        // }

        return (
            <div className={classes.users}>
                <div className={classes.paginationMenu}>
                    <div className={classes.pagination}>
                        {this.props.currentPaginationArray.map(p => <span
                            className={this.props.currentPage === p ? classes.active : ""}
                            onClick={() => this.onPageChange(p, amountOfPages)}> {p} </span>)}
                        <span>...</span>
                        <span
                            className={this.props.currentPage === this.props.lastPaginationElement ? classes.active : ""}
                            onClick={() => this.onPageChange(this.props.lastPaginationElement, amountOfPages)}>{this.props.lastPaginationElement}</span>
                    </div>

                    <button className={classes.loadUsers} onClick={this.setDefaultUsers}>Get users</button>
                </div>

                {
                    this.props.users.map(u => <User id={u.id} photoUrl={u.photoUrl} followed={u.followed}
                                                    fullName={u.name} status={u.status} follow={this.props.follow}
                                                    unfollow={this.props.unfollow} city="Kyiv" country="Ukraine"/>)
                }
            </div>)
    }
}

export default Users;