import NavBar from 'react-bootstrap/Navbar'

export default function Header() {
    return (
        <NavBar bg="dark" variant="dark">
            <NavBar.Brand><h1> City Watchers </h1></NavBar.Brand>
        </NavBar>
    );
}