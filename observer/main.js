import User from './User';
import Follower from './Follower';
import Stalker from './Stalker';
import Hater from './Hater';

console.log('Creating a user and some other profiles');
const user = new User();
const fan = new Follower();
const stalker = new Stalker();
const hater = new Hater();

console.log('Some people starts to following our star!');
user.subscribe(fan);
user.subscribe(stalker);
user.subscribe(hater);

console.log('Our star starts to act! Let\'s see what happens...');

user.doSomething('walking on the street');
user.doSomething('running on the street');
user.doSomething('smiling to everyone!');

console.log('Our start finally managed to mislead the hater');
user.unsubscribe(hater);

user.doSomething('Acting normally with no worries');
