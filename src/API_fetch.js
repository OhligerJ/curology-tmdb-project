import React from 'react';

// Import the Autocomplete Component
import Autocomplete from 'react-autocomplete';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        // Set initial State
        this.state = {
            // Current value of the select field
            value: "",
            // Data that will be rendered in the autocomplete
            autocompleteData: [
                { 
                    label: 'Apple',
                    value: 1
                },
                { 
                    label: 'Microsoft',
                    value: 2
                },
                { 
                    label: 'Me, Myself and I',
                    value: 3
                }
            ]
        };

        // Bind `this` context to functions of the class
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
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
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
            </div>   
        ); 
    }

    /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    getItemValue(item){
        // You can obviously only return the Label or the component you need to show
        // In this case we are going to show the value and the label that shows in the input
        // something like "1 - Microsoft"
        return `${item.value} - ${item.label}`;
    }

    render() {
        return (
            <div>
                <Autocomplete
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}


// class Wiki extends React.Component {

//     constructor(props) {
//       super(props);
  
//       // this.state, not this.setState.
//       // Also, it helps if you set your initial value to the value
//       // to what you expect from your fetch (ie an array, albeit empty)
//       this.state = { wikiData: [] }
//     }
  
//     // componentDidMount rather than componentWillMount
//     // https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
//     componentDidMount() {
//       fetch(apiUrl(this.props.query))
//         .then(response => {
//         .then(data => data.json())
//         .then(data => this.setState = { wikiData: data }
//         });
//     }
  
//     render() {
  
//       // Check to see if your initial state is empty or not
//       if (!this.state.wikiData.length) return <p>No answer</p>
  
//       // No need for your else here. If your state is not empty, the first
//       // return doesn't run, but this one does as a default.
//       return (
//         <div>
//           <h1>Something happened </h1>
//           <h2>{this.state.wikiData[0]}</h2>
//         </div>
//       )
//     }
  
// }

// class API_fetch extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//       this.api_key = "403ffcb3b4481da342203f94fb6e937e";
//     }
  
//     componentDidMount() {
//       fetch("https://api.themoviedb.org/3/search/movie?api_key={this.api_key}&language=en-US&include_adult=false")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, items } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ul>
//             {items.map(item => (
//               <li key={item.name}>
//                 {item.name} {item.price}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
//   }

//   export default API_fetch;