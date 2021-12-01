const model = require('./tweet-model');

const findAllTweets = () => model.find().sort({_id:-1});
const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.deleteOne({_id: id});
const updateTweet = (id, tweet) => model.updateOne({_id: id}, {$set: {liked: true}});

module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet
};
