import React from 'react'
import{Container,Row,Col} from "react-bootstrap"
import logo from "./assets/logo.png"
const Navbar = (props) => {
    
    function onSearch(searchedValue){
        props.searchMovies(searchedValue)
    }
    return (
        <div className="nav_style w-100">
            <Container>
                <Row className="pt-2">
                    <Col xs="2" lg="1">
                        <img src={logo} className="logo" alt="logo" />
                    </Col>
                    <Col xs="10" lg="11" className="d-flex align-items-center">
                        <div className="search w-100">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control" placeholder="search" onChange={(e)=>onSearch(e.target.value)}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar