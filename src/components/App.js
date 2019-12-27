import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = (term) => {
        axios
        .get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
            Authorization: 'Client-ID 727e6fd0ce8c2d1d2c7a9df3379e19b96a6d3e2e5f15207a5587f040b470d8bb'
            }
        })
        .then(res => this.setState({images: res.data.results }))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length}
            </div>
        );
    }
}

export default App;