import React, {Component} from 'react'
import Shelf from './Shelf'

class App extends Component {
    render(){
        return (
            <div>
                <h1>Book Tracking App</h1>
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