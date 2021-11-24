import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import * as constants from "../../Constants";
var preserved = [];
export default class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleStatus = (a) => {
    if (preserved.includes(a)) {
      preserved = preserved.filter((num) => {
        return num !== a;
      });
    } else {
      preserved.push(a);
    }
    this.props.handlePreserveChange(preserved);
  };

  /* componentDidMount() {
    document.getElementById("checkbox-1").checked = true;
  } */
  render() {
    const {
      clearBoard,
      handleChoice,
      visualizeAlgorithm,
      visualizeMaze,
      end_node_row,
      end_node_col,
    } = this.props;
    return ( <
      div >
      <
      Navbar collapseOnSelect expand = "lg"
      bg = "dark"
      variant = "dark" >
      <
      Navbar.Brand href = "#home" > Find the way < /Navbar.Brand> <
      Navbar.Toggle controls = "responsive-navbar-nav" / >
      <
      Navbar.Collapse id = "responsive-navbar-nav" >
      <
      Nav className = "mr-auto" >
      <
      Nav.Link href = "#pricing"
      onClick = {
        () => clearBoard()
      } >
      Clear Board <
      /Nav.Link> <
      NavDropdown title = "Maze Algorithms"
      id = "collasible-nav-dropdown" >
      <
      NavDropdown.Item href = "#action/3.1"
      onClick = {
        () => visualizeMaze(constants.MAZE_RD)
      } >
      Recursive Division <
      /NavDropdown.Item> <
      NavDropdown.Item href = "#action/3.2"
      onClick = {
        () => visualizeMaze(constants.MAZE_RB)
      } >
      Recursive Backtracking <
      /NavDropdown.Item>  < /
      NavDropdown > <
      NavDropdown title = "Node Actions"
      id = "collasible-nav-dropdown" >
      <
      NavDropdown.Item href = "#action/3.11"
      onClick = {
        () => handleChoice(constants.ADD_MID)
      } >
      Add Mid <
      /NavDropdown.Item> <
      NavDropdown.Item href = "#action/3.12"
      onClick = {
        () => handleChoice(constants.DEL_MID)
      } >
      Delete Mid <
      /NavDropdown.Item> < /
      NavDropdown > <
      NavDropdown title = "Algorithms"
      id = "collasible-nav-dropdown" >
      <
      NavDropdown.Item href = "#action/3.7"
      onClick = {
        () =>
        visualizeAlgorithm(
          0,
          end_node_row,
          end_node_col,
          constants.DIJK
        )
      } >
      Dijkstra 's < /
      NavDropdown.Item > <
      NavDropdown.Item href = "#action/3.8"
      onClick = {
        () =>
        visualizeAlgorithm(
          0,
          end_node_row,
          end_node_col,
          constants.DFS_NORM,
          1
        )
      } >
      Depth First Search - Normal <
      /NavDropdown.Item> <
      NavDropdown.Item href = "#action/3.9"
      onClick = {
        () =>
        visualizeAlgorithm(
          0,
          end_node_row,
          end_node_col,
          constants.DFS_RAND
        )
      } >
      Depth First Search - Randomised <
      /NavDropdown.Item> <
      NavDropdown.Item href = "#action/4.0"
      onClick = {
        () =>
        visualizeAlgorithm(
          0,
          end_node_row,
          end_node_col,
          constants.BFS
        )
      } >
      Breadth First Search - Normal <
      /NavDropdown.Item> <
      NavDropdown.Item href = "#action/4.1"
      onClick = {
        () =>
        visualizeAlgorithm(
          0,
          end_node_row,
          end_node_col,
          constants.MBFS
        )
      } >
      Breadth First Search - Multi Source <
      /NavDropdown.Item> <
      NavDropdown.Item href = "#action/4.2"
      onClick = {
        () =>
        visualizeAlgorithm(
          0,
          end_node_row,
          end_node_col,
          constants.ASTAR
        )
      } >
      Swarm Algorithm <
      /NavDropdown.Item> < /
      NavDropdown > <
      /Nav> <
      /Navbar.Collapse> < /
      Navbar > <
      /div>
    );
  }
}