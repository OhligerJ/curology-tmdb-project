import React, { Component } from 'react'

import axios from 'axios'

import InfiniteScroll from 'react-infinite-scroller';
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
      hasMore: true,
      results: [],
      initialLoad: true
    }
  
    getInfo = (page) => {
      let nextPage = page || this.state.page
      this.setState({hasMore:false})
      axios.get(`${API_URL}&api_key=${API_KEY}&query=${this.state.query}&page=${nextPage}`)
        .then(({ data }) => {
            console.log(data);
          this.setState({
            results: (nextPage == 1 ? data.results : this.state.results.concat(data.results)), // this is the array of results, which allows us to use .map() in MovieList   
            searchUrl: `Search URL: http://localhost:3000/?query=${this.state.query}`,
            totalResults: data.total_results,
            page: nextPage,
            initialLoad: false,
            hasMore: (nextPage !== data.total_pages)
          })

          console.log(this.state.results)
        })
    }
  
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 0) {
            this.getInfo(1)
          } else if (!this.state.query) {
          }
        })
      }

      componentDidUpdate(prevProps, prevState) {
          if(prevState.initialLoad) {
            this.setState({
              initialLoad: false
            });
          }
        };


      // componentDidMount = () => {
      //   if(this.state.query && this.state.query.length > 0){
      //     this.getInfo();
      //   }
      // }
    
      render() {
        
        return (
          <div>
            <h1>Movie Search App</h1>

            <div className="searchUrl">{this.state.searchUrl}</div>

            <form>
              <label>Search for movies by title:</label>
              <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                value={this.state.query}
              />

              <InfiniteScroll
                  pageStart={0}
                  initialLoad={this.state.initialLoad}
                  loadMore={this.getInfo.bind(this)}
                  hasMore={this.state.hasMore}
              >
                  <MovieList results={this.state.results} key={this.state.page} />
              </InfiniteScroll>
              
            </form>
          </div>
        )
      }
    }
    
    export default Search