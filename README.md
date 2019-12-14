# Design Patterns in Javascript

Examples of design patterns in Javascript
My studies are based mainly on "Head First Design Patterns" and [Carlos Caballero's Blog](https://www.carloscaballero.io/).

Patterns Until Now:

## Strategy (SimUDuck)

• The strategy pattern consists in encapsulate in classes algorithms that can vary taking the advantage of inheritance reducing the coupling. This way we can until change the behavior of the object in runtime. Powerful!

To see the Strategy pattern in action run the script bellow:
```node ./strategy/main.js```
**OR**
```npm run strategy```
**OR**
```yarn strategy```


## Observer (Followers)

* The observer pattern consists in create a relationship of one to many with light coupling. The Observable object keep the Observers updated about his state registering and notifying them. Besides, is possible unregister a Observer e don’t update it anymore.

To see the Strategy pattern in action run the script bellow:
```node ./observer/main.js```
**OR**
```npm run observer```
**OR**
```yarn observer```
