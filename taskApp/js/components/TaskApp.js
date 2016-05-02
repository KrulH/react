var TaskApp = React.createClass({
    getInitialState: function() { //başlangıç statetimiz
        return {
            items: [],
            task: ''
        };
    },
    addTask: function(e) { //we pass the event object
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: '' // input bardan giriş yaptıkdan sonra temizlensin istiyoruz
        });

        e.preventDefault();
    },
    onChange: function(e) {
        this.setState({ task: e.target.value}); //update the state for our task
    },
    render: function () {
        return (
            <div>
                <h1>My Tasks</h1>
                <TaskList items={this.state.items} />

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>
                </form>
            </div>
        );
    }
});

React.render(<TaskApp />, document.body);






















