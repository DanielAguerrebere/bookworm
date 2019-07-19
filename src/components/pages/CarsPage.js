import React from 'react';
import { Button, Icon, Header } from "semantic-ui-react";

class CarsPage extends React.Component {

    submit = (data) => {
        console.log(data)
    };

    render() {
        return (
            <div>
                    <Header as={"h1"} textAlign={"center"}>
                        Cars Page
                    </Header>

                <div className="container">
                    <ul>
                        <Button animated>
                            <Button.Content visible>
                                Small
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name={"car"}/>
                            </Button.Content>
                        </Button>
                    </ul>
                    <ul>
                        <Button animated>
                            <Button.Content visible>
                                Medium
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name={"car"}/>
                            </Button.Content>
                        </Button>
                    </ul>
                    <ul>
                        <Button animated>
                            <Button.Content visible>
                                SUV
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name={"car"}/>
                            </Button.Content>
                        </Button>
                    </ul>
                </div>

            </div>
        );
    }
}

export default CarsPage;