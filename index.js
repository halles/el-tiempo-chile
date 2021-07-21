import OAuth from 'oauth';
import mapData from './mapWeather.mjs';
import weatherData from './weather.mjs';

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const ACCESS_TOKEN        = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const TWEET_STRUCTURE = "\
🕘 9AM\n\n\
        %\n\
        %%\n\
       %%\n\
       %%%\n\
      %%\n\
      %%\n\
     %%\n\
     %%\n\
    %%\n\
    %%\n\
   %%\n\
   %%\n\
   %%\n\
   %%\n\
  %%\n\
   %%\n\
        %\n\
        %\n\
       %\n\
      %\n\
%%\n\
%%\n\
  %%\n\
      %%%\n\
            %%\n\
                   %%\
";

const parseIcon = (point) => {
	const icons = {
		'01d': '☀️',
		'02d': '🌤',
		'03d': '☁️',
		'04d': '☁️',
		'09d': '🌧',
		'10d': '🌧',
		'11d': '⛈',
		'13d': '❄️',
		'50d': '🌫'
	};

	return icons[point.weatherData.hourly[8].weather[0].icon];
}

const mapWeather = async (data) => {
    let tweet = TWEET_STRUCTURE;
    let index = 0;

	let mapData = await data;

	return new Promise(resolve => {

		while(tweet.indexOf('%') > -1){
			let charPos = tweet.indexOf('%');

			tweet = tweet.slice(0, charPos) + parseIcon(mapData[index]) + tweet.slice(charPos+1);
			index++;
		}

		resolve(tweet);

	});
};

const doTheTweet = tweet => {

	const twitterClient = new OAuth.OAuth(
		'https://api.twitter.com/oauth/request_token',
		'https://api.twitter.com/oauth/access_token',
		API_KEY,
		API_SECRET,
		'1.0A',
		null,
		'HMAC-SHA1'
	);

	const postBody = {
		'status': tweet
	};

	twitterClient.post('https://api.twitter.com/1.1/statuses/update.json',
		ACCESS_TOKEN,  // oauth_token (user access token)
		ACCESS_TOKEN_SECRET,  // oauth_secret (user secret)
		postBody,  // post body
		'',  // post content type ?
		function(err, data, res) {
			if (err) {
				console.log(err);
			} else {
				// console.log(data);
			}
		});
}

mapData()
	.then((data) => {
		return weatherData(data)
	})
	.then((data) => {
		// data.map(el => {
		// 	console.log(el.weatherData.hourly[8].weather);
		// })
		return mapWeather(data);
	})
	.then((tweet) => {
		doTheTweet(tweet);
	});
