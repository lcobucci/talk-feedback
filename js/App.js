(function(Marionette, Feedback) {
    Feedback.app = new Marionette.Application();

    Feedback.app.on("start", function() {
        var collection = new Feedback.VoteCollection();
        var main = new Feedback.MainView();

        main.render();
        main.showChildView("reset", new Feedback.ResetView({votes: collection}));
        main.showChildView("voting", new Feedback.VotingView({votes: collection, model: new Feedback.Summary({votes: collection})}));
    });

    Feedback.app.start();
}(Marionette, Feedback));
