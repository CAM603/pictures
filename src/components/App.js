import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = (term) => {
        
        unsplash
        .get('/search/photos', {
            params: { query: term },
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