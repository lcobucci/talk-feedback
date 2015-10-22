window.Feedback = (function(Backbone) {
    var Feedback = {};

    Feedback.Vote = Backbone.Model.extend({
    });

    Feedback.VoteCollection = Backbone.Collection.extend({
        model: Feedback.Vote
    });

    Feedback.Summary = Backbone.Model.extend({
        defaults: {
            green: 0,
            yellow: 0,
            red: 0,
        },

        initialize: function(options) {
            this.votes = options.votes;

            this.listenTo(this.votes, 'add', this.append);
            this.listenTo(this.votes, 'reset', this.clear);
        },

        append: function(vote) {
            var type = vote.get("type");
            var total = this.get(type);

            this.set(type, total + 1);
        },

        clear: function() {
            this.set("green", 0);
            this.set("yellow", 0);
            this.set("red", 0);
        }
    });

    return Feedback;
})(Backbone);

