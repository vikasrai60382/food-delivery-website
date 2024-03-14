import { Component } from "react";

class Profile extends Component{
    constructor(props){
        super(props);
        console.log("constructor");
        this.state={
            profileinfo:{
                name:" ",
                location:" "
            }

        }
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/prabhat8952");
        const json=await data.json();
        this.setState({
            profileinfo:json
        })
    }
    render(){
        return(
            <div>
              <h1>profile</h1>
            {/*   //<img style={"width":200px,"height":200px} src={this.state.profileinfo.avatar_url}/>// */}
              <h2>name: {this.state.profileinfo.name}</h2>
              <h2>name: {this.state.profileinfo.location}</h2>
            </div>
        )
    }
}
export default Profile;