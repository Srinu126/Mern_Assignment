import axios from 'axios';
import React from 'react';
class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={data:{}}
    }
    async componentDidMount(){
        const response = await axios.get("http://localhost:5000/user/2");
        this.setState({data: response.data.data})
        console.log(this.state.data)
    }
    render(){
        const data1=this.state.data
        return(
            <div style={{marginLeft:'250px'}}>
                <h3> Details</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Password</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                                    <tbody>
                                <tr>
                                    <td>{data1.name}</td>
                                    <td>{data1.password}</td>
                                    <td>{data1.email}</td>
                                </tr>
                            </tbody>
                            
                        </table>
            </div>
        )
    }
}
export default Employee;