var TaskList = React.createClass({
    render: function () {
        var displayTask = function(task) {
            return <li>{task}</li>
        };
        return ( //foreach ($tasks as $task)
            <ul>
                {this.props.items.map(displayTask)}
            </ul>
        )
    }
});

