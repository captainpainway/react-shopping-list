import React from 'react';
import ReactDOM from 'react-dom';

var inputStyle = {
    border: 'none',
    boxShadow: 'inset 0 0 3px #999',
    padding: '5px'
}

class ShopList extends React.Component {
    render() {
        let createItem = function(item) {
            return <li><input type='checkbox'></input>
                <label key={item.id}>{item.text}</label>
                <input className='item-price' type='text'></input>
                <label className='price'>$</label></li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

class ShopApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        let nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        let nextText = '';
        this.setState({items: nextItems, text: nextText});
    }
    render() {
        return (
            <div id='body-wrapper'>
                <h3>SHOPPING LIST</h3>
                <div id='list-wrapper'>
                    <ShopList items={this.state.items} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input style={inputStyle} onChange={this.onChange} value={this.state.text} />
                    {/*<button>{'Add'}</button>*/}
                </form>
            </div>
        );
    }
}

ReactDOM.render(<ShopApp />, document.getElementById('app'));
