import React, { Component } from 'react'

import axios from 'axios'

import Pagination from './Pagination';
import MovieList from './MovieList';

const API_KEY = "403ffcb3b4481da342203f94fb6e937e"; // would normally be env variable
const API_URL = `https://api.themoviedb.org/3/search/movie?&language=en-US&include_adult=false`;

const searchParams = new URLSearchParams(window.location.search);

class Search extends Component {
    state = {
      query: searchParams.get('query') || '',
      page: searchParams.get('page') || 1,
      searchUrl: '',
      totalResults: 0,
      currentPage: 1,
      results: []
    }
  
    getInfo = () => {
      axios.get(`${API_URL}&api_key=${API_KEY}&query=${this.state.query}&page=${this.state.page}`)
        .then(({ data }) => {
            console.log(data);
          this.setState({
            results: data.results, // this is the array of results, which allows us to use .map() in MovieList   
            searchUrl: `http://localhost:3000/?query=${this.state.query}&page=${this.state.page}`,
            totalResults: data.total_results
          })

          console.log(this.state.searchUrl)
        })
    }
  
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 0) {
            this.getInfo()
          } else if (!this.state.query) {
          }
        })
      }

      componentDidMount = () => {
        if(this.state.query && this.state.query.length > 0){
          this.getInfo();
        }
      }

      onPageChanged = () => {
       
        if(this.state.query && this.state.query.length > 0){
          this.getInfo();
        }
       }
    
      render() {
        
        return (
          <div>
            <h1>{this.state.searchUrl}</h1>

            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={this.state.totalResults} pageLimit={10} pageNeighbours={2} onPageChanged={this.onPageChanged} />
            </div>

            <form>
              <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                value={this.state.query}
              />
              <MovieList results={this.state.results} />
            </form>
          </div>
        )
      }
    }
    
    export default Search