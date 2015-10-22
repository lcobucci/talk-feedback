(function(Marionette, Feedback) {
    Feedback.MainView = Marionette.LayoutView.extend({
        template: "#main-template",
        el: "#main",
        regions: {
            reset: "#reset",
            voting: "#voting"
        }
    });

    Feedback.ResetView = Marionette.ItemView.extend({
        template: "#reset-template",

        initialize: function(options) {
            this.votes = options.votes;
        },

        ui: {
            btn: ".btn"
        },

        events: {
            "click @ui.btn": "clear"
        },

        clear: function() {
            this.votes.reset();
        }
    });

    Feedback.VotingView = Marionette.ItemView.extend({
        template: "#voting-template",

        initialize: function(options) {
            this.votes = options.votes;
        },

        ui: {
            votingArea: ".voting-area"
        },

        events: {
            "click @ui.votingArea": "vote"
        },
        
        vote: function(event) {
            this.votes.add(new Feedback.Vote({type: event.target.id}));
        }
    });
}(Marionette, Feedback));
