import React, {Component} from 'react'
import SearchBar from './SearchBar'
import Shelf from './Shelf'
import {getAll} from '../utils/BooksApi'

class App extends Component {
    constructor(props){
        super(props);
        this.state = { books : [] };
    }

    componentDidMount(){
        getAll().then(result =>
            this.setState(() => ({
                books : result
            })
        ));
    }

    render(){
        console.log(this.state.books);
        return (
            <div>
                <h1>Book Tracking App</h1>
                <SearchBar/>
                <Shelf
                    title='Currently Reading'
                />
                <Shelf
                    title='Want to Read'
                />
                <Shelf
                    title='Read'
                />
            </div>
        )
    }
}

export default App