import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        // Set initial State
        this.state = {
            movies: []
        };

        this.api_key = "403ffcb3b4481da342203f94fb6e937e";

        // Bind `this` context to functions of the class
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }


    /**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
     */
    retrieveDataAsynchronously(searchText){
        let _this = this;

        // Url of your website that process the data and returns a
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&include_adult=false&query=${searchText}`;
        
        // Configure a basic AJAX request to your server side API
        // that returns the data according to the sent text
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            let status = xhr.status;

            if (status === 200) {
                // In this example we expects from the server data with the structure of:
                // [
                //    {
                //        label: "Some Text",
                //        value: 1,
                //    },
                //    {
                //        label: "Some Other Text",
                //        value: 1,
                //    },
                // ]
                // But you can obviously change the render data :)

                // Update the state with the remote data and that's it !
                console.log("XHR response:");
                console.log(xhr.response.results); // this is an arry, so should not trigger autocomplete issues, because somewhere in Autcomplete it calls .map on this, and .map doesn't work on objects
                _this.setState({
                    movies: xhr.response.results
                });

            } else {
                console.error("Cannot load data from remote source");
            }
        };

        xhr.send();
    }
    
    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
    onChange(e){
        this.setState({
            value: e.target.value
        });

        /**
         * Handle the remote request with the current text !
         */
        this.retrieveDataAsynchronously(e.target.value);

        console.log("The Input Text has changed to ", e.target.value);
    }

    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
    onSelect(val){
        this.setState({
            value: val
        });

        console.log("Option from 'database' selected : ", val);
    }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
    renderItem(item, isHighlighted){
      console.log('hello, can you hear me');
      console.log(item.id);
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>
                {item.label}
            </div>   
        ); 
    }

    render() {
        return (
          <div>
            <div className="search">
              <input type="text" id="movie_search" />
            </div>

            <div>
              <h1>Movie List</h1>
              <ul>
                {this.state.movies.map(movie => {
                  return <li key={`movie-${movie.id}`}>{movie.name}</li>
                })}
              </ul>
            </div>
          </div>
        );
    }
}

