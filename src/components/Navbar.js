import { Component } from "react"
import { Link } from "react-router-dom"
import { menudata } from "./menudata"
import "./navbarStyles.css"
class Navbar extends Component{
    state={clicked:false}
    handleClick=()=>{
         this.setState({clicked:!this.state.clicked})
    }
    render(){
        return (
            <nav className="navbaritems" >
                <h1 className="logo">EZ Market</h1>
                
                <ul type="none" className="nav-menu">
                    {menudata.map((item,index)=>{
                        if(index!=menudata.length-1)
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        <a href="#" className="nav-links">Sign Up</a>
                    </li>
                    
                </ul>
                <div className="menu-icons"
                onClick={this.handleClick}>
                    <i 
                     className=
                     {this.state.clicked ?
                         "fas fa-times" : "fas fa-bars"}
                    ></i>
                </div>
                <ul type="none" className={this.state.clicked?
                "nav-menu-bars":"nav-menu1 active"}>
                    {menudata.map((item,index)=>{
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>

                                   
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                   
                    
                </ul>
              
                
            </nav>
        )
    }
}

export default Navbar