import React,{Component} from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";


class App extends Component{
  render(){
    return(
      <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

          <Grid.Column style={{ maxWidth: 450 }}>
           <Header as="h3" color="teal">
           <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/> Member Login
           </Header>
              <Form>
              <Segment stacked>
                <Form.Input icon="user" iconPosition="left" type="email" placeholder="Email address" fluid/>
                <Form.Input icon="lock" iconPosition="left" type="password" placeholder="Password" fluid/>
                <Form.Checkbox label="I agree to the Terms and Conditions"/>

                <Button color="teal" fluid >Login</Button>
                </Segment>
              </Form>
           <Message>
            Tidak Punya Akun? Silahkan <a href="/" target="blank">Register</a>
           </Message>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}
export default App;
