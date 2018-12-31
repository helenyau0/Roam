INSERT INTO cities (name, image)
VALUES
('Oakland', '/image/dt-oakland.jpg'),
('Las Vegas', '/image/Las-Vegas.jpg'),
('Neverland', '/image/Neverland.png'),
('San Francisco', '/image/San-Francisco.jpg'),
('New York', '/image/New-York.jpg'),
('Los Angeles', '/image/Los-Angeles.jpg');

INSERT INTO users (name, email, password, image)
VALUES
('Potatoe', 'potatoe@gmail.com', '$2a$10$nafj4wR9YVBBLHAngtWP2uQbFiKwdPST3L62dpIwXEaa6wd6YfJZi', '/image/squirtle.png'),
('Bella', 'happy@gmail.com', '$2a$10$Ar3lBRzsTdytcCnj/BbY5OiSDRVcWiLUbKgC2lG7uCKPm3HvmY2pe', '/image/squirtle.png');

INSERT INTO posts (title, body, user_id, city_id)
VALUES
('Vegas has the best buffets!', 'Vegas is home to some of the best buffets ever!! They will top every other buffet youve been to with their wide variety of selections. Some buffets worth waiting in line for (not in order): Wicked Spoon, Studio B Buffet, Bacchanal, Sterling Brunch, and The Buffet at Bellagio. Also, be aware that seating for most buffets take up to an hour of waiting so get there early.', 1, 2),
('Cirque du Soleil', 'Dont leave Vegas without catching a Cirque du Soleil show! You can find many world-class performers in these shows and their performance will always leave you breathless. Be prepared to see mind-blowing acrobatics, crazy stunts, contortion, lots of story telling, and more!', 2, 2),
('High Roller', 'The view on the High Roller at night is fantastic! You can see everything on the strip perfectly lit up. They also have an open bar for those waiting in line and allow drinks on the ride. Its worth paying $30 to see the incredible view and makes an awesome date idea.', 1, 2),
('Play Roulette for your moneys worth', 'Playing Roulette on the machines is easier to gamble compared to other games because after a few rounds, the patterns becomes easy to guess. And dont guess on numbers, the trick is to bet on black or red.', 1, 2),
('Lake Merritt', 'Go jog around the lake or have a stroll in the park with a friend - the lake is approximately 3 miles. Its a great place to go surround yourself with positive energy, and in the evening you can always catch the sunset. Theres so much to do here, sometimes theres live music and youll always find families bbqing.', 2, 1),
('Grand Lake Theatre', 'One of the oldest movie threatres in the Bay Area (built in 1926), Grand Lake Theatre has beautiful decor and vintage interior design. Each auditorium has a different theme and makes the theatre experience more enjoyable. Although its a vintage movie theatre most showings are on the latest releases', 2, 1);
