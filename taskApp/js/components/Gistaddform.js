var Gistaddform = React.createClass({
    getInitialState: function() {
      return {
        username: ''
      };
    },
    onChange: function(e){
        this.setState({
            username: e.target.value
        });
    },
    addGist: function(e){
        e.preventDefault(); // dont submit the form
        this.props.onAdd(this.state.username); // text yazdıklarını parentdaki onadd metoduna pass ediyoruz
        this.setState({username: ''});
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.addGist}>
                    <input value={this.state.username} onChange={this.onChange} placeholder="Type a github username ..." />
                    <button>Fetch Latest Gist</button>


                </form>
            </div>
        );
    }
});

