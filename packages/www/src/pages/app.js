import React, {useContext} from 'react';
import {Router, Link} from "@reach/router"
import netlifyIdentity from 'netlify-identity-widget';
import {Container, Heading, Button, Flex, NavLink } from 'theme-ui';
import { IdentityContext } from '../../netlifyIdentity.context';

let Dash = () => {
//const user = netlifyIdentity.currentUser();
const { user, identity: netlifyIdentity } = useContext(IdentityContext);

return (
// <div> {user && user.user_metadata.full_name}

//</div> 

<Container>
<Flex as="nav">
            <NavLink as={Link} to="/" p={2}>
                Home
            </NavLink>
            <NavLink as={Link} to={"/app"} p={2}>
                Dashboard
            </NavLink>
            { user && (<NavLink p={2} >
                {user.user_metadata.full_name}
            </NavLink>)}
        </Flex>
    </Container>
)
}

let DashLoggedOut = props => {
    const { identity: netlifyIdentity } = useContext(IdentityContext)
    return(
        
        <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1"> Todo App</Heading>
        <Button sx={{ marginTop: 2, color: 'black' }}
        onClick = { () => {netlifyIdentity.open() }}> 
        Login 
        </Button>
        </Flex>

    )
}
export default props => {
    return (
        <Router>
            <Dash path="/app"/>
        </Router>
    )
}
