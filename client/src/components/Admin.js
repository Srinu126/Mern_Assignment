import axios from 'axios';
import React from 'react';
import './Admin.css'
class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={data:{}}
    }
    async componentDidMount(){
        const response = await axios.get("http://localhost:5000/users");
        console.log(response.data.data);
        this.setState({data: response.data.data})
    }
    render(){
        const data1=this.state.data

        return(
            <div style={{marginLeft:'250px'}}>
                <h3>User Details</h3>
                {data1.length>0 ? 
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Password</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            {data1.map((data)=>{
                                return(
                                    <tbody key={data.id}>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.password}</td>
                                    <td>{data.email}</td>
                                </tr>
                            </tbody>
                                )

                            })}
                            
                        </table>
                 : null}
            </div>
        )
    }
}
export default Admin;