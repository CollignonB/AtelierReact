import React from "react";
import Axios from "axios";

class Swapi extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            data: null,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() 
    {
        Axios.get('https://swapi.dev/api/people/1/')
        .then((response) =>
        {
            console.log(response);
            this.setState({
                data: response.data,
                isLoaded: true
            });
        })
        .catch((error) =>
        {
            this.setState({
                error: error,
                isLoaded: true
            });
        })
    }

    render() {
        if(!this.state.isLoaded) 
        {
            return(
                <section>
                    <h2>Voici un personange de Star Wars</h2>
                    <p>chargement en cours</p>
                </section>
            )
        }else if(!this.state.error)
        {
            return(
                <section>
                    <h2>Voici un personange de Star Wars</h2>
                    <p>{this.state.data.name}</p>
                </section>
            )
        } else
        {
            return(
                <section>
                    <h2>Voici un personange de Star Wars</h2>
                    <p>Une erreur est survenue nous ne pouvons pas changer le contenu</p>
                </section>
            )
        }
    }
}

export default Swapi;